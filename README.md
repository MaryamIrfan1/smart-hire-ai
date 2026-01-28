# SmartHire – AI-Powered Job Matching Platform

SmartHire is a full-stack web application that simplifies job searching by aggregating job listings from multiple platforms and matching them with user skills extracted directly from resumes 🤖📄

The platform focuses on **efficiency**, **relevance**, and **usability**, helping job seekers find suitable roles faster through intelligent matching and centralized tracking.

---

## Project Overview

Searching for jobs often requires visiting multiple platforms, manually filtering listings, and repeatedly uploading resumes. **SmartHire** solves this problem by providing a single dashboard where users can:

* Search jobs from multiple job boards in one place
* Upload resumes and extract skills automatically
* View job match percentages based on skills
* Track applied jobs centrally
* Redirect to original job postings for authentic applications

> **Note:** SmartHire does not host or post jobs.
> All job listings are fetched via external APIs, and users are redirected to the original job source (LinkedIn, Indeed, Glassdoor, etc.) when applying.

---

## Key Features ✨

### Job Aggregation 🔍

* Fetches real-time job listings using **RapidAPI (JSearch API)**
* Aggregates jobs from platforms such as:

  * LinkedIn
  * Indeed
  * Glassdoor
* Displays jobs in a unified format for easy comparison

### Resume Upload & Skill Extraction 📑

* Supports **PDF** and **DOCX** resumes
* Automatically extracts technical and soft skills
* Eliminates the need for manual skill entry

### Smart Job Matching 🎯

* Matches extracted resume skills with job requirements
* Displays a **match percentage** for each job
* Ranks jobs based on relevance

### User Dashboard & Profile Management 👤

* Update personal information and professional headline
* Select education level and experience
* Upload and manage multiple resumes
* Add portfolio or website links
* Upload a profile picture

### Applied Jobs Tracking 📌

* Save applied jobs within the platform
* View application history
* Delete or manage applied jobs easily

### Job Alerts 🔔

* View job alerts based on user preferences
* Stay updated with relevant opportunities

---

## Tech Stack 🛠️

### Frontend

* React 18
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer (file uploads)
* pdf-parse & mammoth (resume parsing)
* bcrypt (authentication)

### External API

* JSearch API (RapidAPI)

### Tools

* Git & GitHub
* VS Code
* Postman
* MongoDB Compass

---

## Project Architecture

```
SMART-HIRE/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   ├── vite.config.ts
│   └── package.json
│
└── README.md
```

---

## Installation & Setup ⚙️

### Prerequisites

* Node.js (v16 or higher)
* MongoDB (local or Atlas)
* RapidAPI account
* Git

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/smarthire
RAPIDAPI_KEY=your_rapidapi_key
RAPIDAPI_HOST=jsearch.p.rapidapi.com
```

Run the backend server:

```bash
node server.js
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## How Job Application Works

1. User searches for jobs on SmartHire
2. Jobs are fetched from RapidAPI (JSearch)
3. Job details are displayed inside the platform
4. Clicking **Apply** redirects the user to the original job posting

This ensures:

* Authentic job listings
* No duplicate or fake postings
* Direct application on trusted platforms

---

## Project Impact 📈

* Reduces time spent searching for jobs
* Improves relevance of job applications
* Centralizes resume and application management
* Enhances job search efficiency for students and fresh graduates

---

## Future Enhancements 🚀

* Advanced NLP-based skill extraction
* Email and notification-based job alerts
* Resume builder with ATS scoring
* Interview preparation module
* Salary insights and analytics

---

## License

This project is developed for educational purposes as part of a **Full Stack Development course**.

---

## Contact

* Email: [maryamirfan803@gmail.com]
* GitHub: https://github.com/MaryamIrfan1

---

Built using the **MERN Stack❤️**
