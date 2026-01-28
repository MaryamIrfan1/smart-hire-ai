import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FindJob from './components/FindJobs';
import ResumeJobSearch from './components/ResumeJobSearch'; 
import JobDetails from './components/JobDetails';
import Dashboard from './components/Dashboard'; 
import AppliedJobs from './components/AppliedJobs';
import JobAlerts from './components/JobAlerts';
import SettingsPage from './components/Settings';
import Sidebar from './components/Sidebar';

function AppContent() {
  const location = useLocation();

  // Paths where Header/Footer should NOT appear
  const hideLayout = ['/login', '/register'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-white">
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-jobs" element={<FindJob />} />
        <Route path="/findJob" element={<FindJob />} />
        <Route path="/ResumeJobSearch" element={<ResumeJobSearch />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appliedJobs" element={<AppliedJobs />} />
        <Route path="/jobAlerts" element={<JobAlerts />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}