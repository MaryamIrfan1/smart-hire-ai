import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './module/User.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ------------------------
// ENV CHECK
// ------------------------
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = 'jsearch.p.rapidapi.com';

if (!RAPIDAPI_KEY) {
  console.error('RAPIDAPI_KEY is missing in .env file!');
  process.exit(1);
}

// ------------------------
// MIDDLEWARE
// ------------------------
app.use(cors({ 
  origin: 'http://localhost:5173',
  credentials: true 
}));
app.use(express.json());

// ------------------------
// MONGODB CONNECTION
// ------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(' MongoDB Connected'))
  .catch(err => console.log(' MongoDB Error:', err));

// ------------------------
// IN-MEMORY JOB STORAGE
// ------------------------
let appliedJobs = [];

// ------------------------
// HEALTH CHECK
// ------------------------
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// ------------------------
// USER AUTH ROUTES
// ------------------------
app.post('/api/register', async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    // Check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email already exists' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      fullName,
      username,
      email,
      password: hashedPassword
    });

    await user.save();
    
    console.log(' New user registered:', {
      fullName: user.fullName,
      email: user.email,
      id: user._id
    });

    res.status(201).json({ 
      success: true, 
      message: 'User registered successfully' 
    });
  } catch (err) {
    console.error(' Registration error:', err);
    res.status(500).json({ 
      success: false, 
      message: 'Registration failed' 
    });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: 'User not found' 
      });
    }

    // Check password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid password' 
      });
    }

    console.log(' User logged in:', user.email);

    // Success response
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.error(' Login error:', err);
    res.status(500).json({ 
      success: false, 
      message: 'Login failed' 
    });
  }
});

// ------------------------
// VIEW ALL USERS (for testing)
// ------------------------
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({ 
      success: true, 
      count: users.length,
      users 
    });
  } catch (err) {
    console.error(' Error fetching users:', err);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch users' 
    });
  }
});

// ------------------------
// GET USER BY EMAIL (for testing)
// ------------------------
app.get('/api/users/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }).select('-password');
    if (!user) {
      return res.status(404).json({ 
        success: false,
        message: 'User not found' 
      });
    }
    res.json({ success: true, user });
  } catch (err) {
    console.error(' Error fetching user:', err);
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch user' 
    });
  }
});

// ------------------------
// JOB SEARCH ROUTES
// ------------------------
app.get('/api/jobs/search', async (req, res) => {
  try {
    const { query, location, page = 1, num_pages = 1 } = req.query;
    
    if (!query) {
      return res.status(400).json({ 
        success: false,
        error: 'Search query is required' 
      });
    }

    let searchQuery = location ? `${query} ${location}` : query;

    console.log(' Searching jobs:', searchQuery);

    const options = {
      method: 'GET',
      url: `https://${RAPIDAPI_HOST}/search`,
      params: { query: searchQuery, page, num_pages },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST
      }
    };

    const response = await axios.request(options);

    // Check if response has data
    if (!response.data || !response.data.data) {
      console.log(' No data in API response');
      return res.json({ 
        success: true, 
        jobs: [], 
        total: 0 
      });
    }

    const jobs = (response.data.data || []).map(job => ({
      id: job.job_id,
      title: job.job_title,
      company: job.employer_name,
      location: job.job_city || job.job_country || 'Remote',
      type: job.job_employment_type || 'Full-time',
      description: job.job_description,
      salary: job.job_salary || 'Not specified',
      applyUrl: job.job_apply_link,
      logo: job.employer_logo,
      postedDate: job.job_posted_at_datetime_utc || new Date().toISOString(),
      source: 'Job Board'
    }));

    console.log(` Found ${jobs.length} jobs`);

    res.json({ 
      success: true, 
      jobs, 
      total: jobs.length 
    });
  } catch (err) {
    console.error(' Job search error:', err.message);
    
    // Send more detailed error info
    res.status(500).json({ 
      success: false,
      error: 'Failed to fetch jobs',
      details: err.response?.data || err.message
    });
  }
});

// ------------------------
// JOB DETAILS - FIXED
// ------------------------
app.get('/api/jobs/:id', async (req, res) => {
  try {
    console.log('🔍 Fetching job details for ID:', req.params.id);

    const options = {
      method: 'GET',
      url: `https://${RAPIDAPI_HOST}/job-details`,
      params: { job_id: req.params.id },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST
      }
    };

    const response = await axios.request(options);
    
    console.log(' API Response:', response.data);

    // FIXED: Better validation and response handling
    if (!response.data) {
      console.log(' No data in response');
      return res.status(404).json({ 
        success: false, 
        error: 'Job not found - no data in response' 
      });
    }

    // Handle different response formats
    let jobData = null;
    
    if (response.data.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
      jobData = response.data.data[0];
    } else if (response.data.data && !Array.isArray(response.data.data)) {
      jobData = response.data.data;
    } else if (response.data.job) {
      jobData = response.data.job;
    } else {
      jobData = response.data;
    }

    // Validate we have job data
    if (!jobData || (!jobData.job_id && !jobData.id)) {
      console.log(' Invalid job data structure');
      return res.status(404).json({ 
        success: false, 
        error: 'Job not found - invalid data structure' 
      });
    }

    console.log(' Job details found:', jobData.job_title || jobData.title);

    // Return in consistent format
    res.json({ 
      success: true, 
      job: jobData 
    });
  } catch (err) {
    console.error(' Job details error:', err.message);
    
    if (err.response?.status === 404) {
      return res.status(404).json({ 
        success: false, 
        error: 'Job not found' 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch job details',
      details: err.response?.data || err.message
    });
  }
});

// ------------------------
// APPLY JOB
// ------------------------
app.post('/api/jobs/apply', (req, res) => {
  try {
    const { jobId, jobTitle, company, applyUrl } = req.body;

    // Validate required fields
    if (!jobId || !jobTitle || !company) {
      return res.status(400).json({ 
        success: false,
        error: 'Missing required fields' 
      });
    }

    // Check if already applied
    if (appliedJobs.some(job => job.jobId === jobId)) {
      return res.status(400).json({ 
        success: false,
        error: 'Already applied to this job' 
      });
    }

    const appliedJob = {
      id: appliedJobs.length + 1,
      jobId,
      jobTitle,
      company,
      applyUrl: applyUrl || '#',
      appliedAt: new Date().toISOString()
    };

    appliedJobs.push(appliedJob);

    console.log(' Job application saved:', jobTitle);

    res.json({ 
      success: true, 
      message: 'Job applied successfully',
      appliedJob 
    });
  } catch (err) {
    console.error(' Apply job error:', err);
    res.status(500).json({ 
      success: false,
      error: 'Failed to save application' 
    });
  }
});

// ------------------------
// GET APPLIED JOBS
// ------------------------
app.get('/api/jobs/applied', (req, res) => {
  res.json({ 
    success: true, 
    appliedJobs,
    count: appliedJobs.length 
  });
});

// ------------------------
// DELETE APPLIED JOB
// ------------------------
app.delete('/api/jobs/applied/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const initialLength = appliedJobs.length;
    
    appliedJobs = appliedJobs.filter(j => j.id !== id);
    
    if (appliedJobs.length === initialLength) {
      return res.status(404).json({ 
        success: false,
        error: 'Applied job not found' 
      });
    }

    console.log(' Applied job deleted:', id);

    res.json({ 
      success: true,
      message: 'Applied job deleted successfully' 
    });
  } catch (err) {
    console.error(' Delete applied job error:', err);
    res.status(500).json({ 
      success: false,
      error: 'Failed to delete applied job' 
    });
  }
});

// ------------------------
// 404 HANDLER
// ------------------------
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    error: 'Route not found' 
  });
});

// ------------------------
// ERROR HANDLER
// ------------------------
app.use((err, req, res, next) => {
  console.error(' Server Error:', err);
  res.status(500).json({ 
    success: false,
    error: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ------------------------
// START SERVER
// ------------------------
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
  console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(` RapidAPI Key: ${RAPIDAPI_KEY ? '✅ Set' : '❌ Missing'}`);
  console.log(`  MongoDB: ${process.env.MONGO_URI ? '✅ Configured' : '❌ Missing'}`);
<<<<<<< HEAD
});

=======
});
>>>>>>> c7f93f4b179963699e8a840a35bd41a0158d769a
