
import React, { useState } from 'react';
import { Briefcase, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // 1. Password match check
  if (formData.password !== formData.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // 2. Terms agreement check
  if (!agreeTerms) {
    alert('Please agree to Terms of Services');
    return;
  }

  // 3. If everything is OK, call API
  try {
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
    });

    const data = await res.json();

    if(res.ok)
    {
      alert("Registration successful! Please log in.");
      navigate('/login');
      return;
    }
    alert(data.message || data.error);

  } catch (error) {
    console.log("Registration error:", error);
  }
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="bg-blue-900 p-2 rounded">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MyJob</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create account.</h1>
            <p className="text-gray-600 mb-8">
              Already have account?{' '}
              <a href="/login" className="text-blue-800 hover:underline">
                Log In
              </a>
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 text-blue-800 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I've read and agree with your{' '}
                  <a href="/terms" className="text-blue-800 hover:underline">
                    Terms of Services
                  </a>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-950 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Create Account
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Sign up with Facebook</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* Right Side - Enhanced Design */}
      <div className="hidden lg:flex w-1/2 bg-linear-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-blue-200 rounded-lg transform rotate-12 opacity-40"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-gray-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-linear-to-b from-blue-200 to-transparent rounded-lg transform -rotate-12 opacity-40"></div>

        {/* Paper Corner Fold */}
        <div className="absolute top-0 right-0 w-32 h-32 z-20">
          <div className="absolute top-0 right-0 w-full h-full bg-white transform origin-top-right"
               style={{
                 clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                 boxShadow: '-3px 3px 12px rgba(0,0,0,0.08)'
               }}>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 flex items-center justify-center w-full h-full p-12">
          <div className="relative">
            {/* Glow Effect Behind Sphere */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Main Sphere */}
            <div className="relative">
              <div className="w-72 h-36 rounded-t-full bg-linear-to-b from-blue-900 via-blue-700 to-gray-900"
                   style={{
                     boxShadow: '0 25px 70px rgba(30, 58, 138, 0.5), inset 0 -5px 20px rgba(0, 0, 0, 0.3)'
                   }}>
                {/* Highlight on Sphere */}
                <div className="w-16 h-16 bg-white rounded-full opacity-20 blur-xl absolute top-8 left-20"></div>
              </div>
              
              {/* Reflection */}
              <div className="w-72 h-36 mt-0 rounded-b-full bg-linear-to-t from-transparent via-blue-200/25 to-blue-300/35 blur-sm"
                   style={{
                     transform: 'scaleY(-1)',
                     opacity: 0.5
                   }}>
              </div>
            </div>

            {/* Decorative Rings Around Sphere */}
            <div className="absolute -inset-12 border border-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -inset-20 border border-blue-100 rounded-full opacity-10"></div>
          </div>
        </div>

        {/* Bottom Decorative Text */}
        <div className="absolute bottom-8 left-0 right-0 text-center z-10">
          <p className="text-gray-400 text-sm font-medium tracking-wider">SEAMLESS • SECURE • SIMPLE</p>
        </div>
      </div>
    </div>
  );
}