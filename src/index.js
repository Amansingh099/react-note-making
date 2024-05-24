import './index.css';
import App from './components/App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import FrontPage from './frontpage/FrontPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/app/*' element={<App/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
