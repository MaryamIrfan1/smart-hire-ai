import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Changed URL to /api/login
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();

      // Check if login was successful
      if (data.success) {
        alert("Login successful!");
        // Store user data in localStorage (optional)
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.log("Login error:", error);
      alert("Something went wrong. Try again!");
    }
  };

  const handleChange = (e) => {
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
            <div className="bg-blue-800 p-2 rounded">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MyJob</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
            <p className="text-gray-600 mb-8">
              Welcome back! Please enter your details.
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent text-gray-900 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-800 border-gray-300 rounded focus:ring-blue-800"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember for 30 days
                  </label>
                </div>
                <a href="/forgot-password" className="text-sm text-blue-800 hover:text-blue-900 font-medium">
                  Forget password
                </a>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-900 transition-colors font-medium"
              >
                Sign in
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
              </button>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <a href="/register" className="text-blue-800 hover:text-blue-900 font-medium">
                    Sign up
                  </a>
                </p>
                <p className="text-gray-400 text-xs mt-6">
                  © MyJob {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Enhanced Design */}
      <div className="hidden lg:flex w-1/2 bg-linear-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-blue-200 rounded-lg transform rotate-12 opacity-40"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-gray-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-linear-to-br from-blue-200 to-transparent rounded-lg transform -rotate-12 opacity-40"></div>

        <div className="absolute top-0 right-0 w-32 h-32 z-20">
          <div className="absolute top-0 right-0 w-full h-full bg-white transform origin-top-right"
               style={{
                 clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                 boxShadow: '-3px 3px 12px rgba(0,0,0,0.08)'
               }}>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center w-full h-full p-12">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="relative">
              <div className="w-72 h-36 rounded-t-full bg-linear-to-b from-blue-900 via-blue-700 to-gray-900"
                   style={{
                     boxShadow: '0 25px 70px rgba(30, 58, 138, 0.5), inset 0 -5px 20px rgba(0, 0, 0, 0.3)'
                   }}>
                <div className="w-16 h-16 bg-white rounded-full opacity-20 blur-xl absolute top-8 left-20"></div>
              </div>
              
              <div className="w-72 h-36 mt-0 rounded-b-full bg-linear-to-t from-transparent via-blue-200/25 to-blue-300/35 blur-sm"
                   style={{
                     transform: 'scaleY(-1)',
                     opacity: 0.5
                   }}>
              </div>
            </div>

            <div className="absolute -inset-12 border border-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -inset-20 border border-blue-100 rounded-full opacity-10"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center z-10">
          <p className="text-gray-400 text-sm font-medium tracking-wider">SEAMLESS • SECURE • SIMPLE</p>
        </div>
      </div>
    </div>
  );
}