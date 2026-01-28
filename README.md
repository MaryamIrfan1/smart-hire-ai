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
## Screenshots

### Home Page
<img width="1720" height="4607" alt="Home Page" src="https://github.com/user-attachments/assets/bb894cd7-7d83-405f-aa2b-217792d7532e" />

### Job Finder Page
<img width="1720" height="3096" alt="Job Finder Page" src="https://github.com/user-attachments/assets/a70e3a2e-68b8-4724-bc3c-160d3452934f" />

### Job Detail Page
<img width="1720" height="1966" alt="Job Detail Page" src="https://github.com/user-attachments/assets/2a95a23e-bfb1-4e39-a870-cbd768c88cdd" />

### Resume / Job Search Page
<img width="1720" height="2350" alt="Resume Job Search Page" src="https://github.com/user-attachments/assets/ea65f8ea-8023-48aa-abf0-fb88689454d1" />

### Register Page
<img width="1720" height="1180" alt="Register Page" src="https://github.com/user-attachments/assets/ead0dfa4-d268-43d1-97c2-bacdfe5eb6a7" />

### Login Page
<img width="1720" height="1180" alt="Login Page" src="https://github.com/user-attachments/assets/4b6ec20a-fdf5-4225-9e3e-8e3e528bb353" />

### User Dashboard
<img width="1720" height="2004" alt="User Dashboard" src="https://github.com/user-attachments/assets/2e45f788-15ba-4921-adff-3ed6b8bd6662" />

### Setting Page
<img width="1720" height="1435" alt="Setting Page" src="https://github.com/user-attachments/assets/3dce95ba-1f37-4da7-b502-87208d9b632e" />

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
