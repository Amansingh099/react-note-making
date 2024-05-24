import React from 'react';
import { Link } from 'react-router-dom';
import './account.css';
import userimg from './Windows-10-user-icon-big.png';

export default function Account({ email }) {
  return (
    <div className="container mx-auto px-4 py-8 accountinfo">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="text-center">
            <img className="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto" src={userimg} alt="User" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold mb-2">User</h2>
            {email && (
              <p className="text-gray-600">Email: {email}</p>
            )}
          </div>
          <div className="mt-8 text-center">
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
