import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/signup', { email, password });
      if (res.data === 'exist') {
        alert('User already exists');
      } else if (res.data === 'notexist') {
        navigate('/app', { state: { id: email } });
      }
    } catch (error) {
      alert('Wrong details');
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="signup-form bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-center text-3xl font-semibold mb-6">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pr-10"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 top-7"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Signup
          </button>
        </form>
        <div className="mt-6 text-center">
          <h1 className="text-lg font-semibold">OR</h1>
          <Link to="/login" className="text-blue-500 hover:underline">Login Page</Link>
        </div>
      </div>
    </div>
  );
}
