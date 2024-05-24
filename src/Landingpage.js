// LandingPage.js
import React,{useState} from 'react';
import './Landingpage.css';
import BookIcon from '@mui/icons-material/Book';
import notes from './notesimg.png';
import ContactModal from './contackmodel';

import { Link } from 'react-router-dom';
function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="landingpage">
      

      <nav className="bgcolor border-gray-800">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white"><BookIcon/>Evernote</span>
        </span>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <button onClick={openModal} className="text-xl text-gray-300 hover:underline">Contact</button>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
            <Link to="/login"  className="text-xl text-blue-500 hover:underline">Login</Link>
        </div>
    </div>
</nav>
<div className="grid grid-cols-2 gap-8 mx-auto max-w-screen-xl p-4">
        <div className="col-span-1">
          <span className="text-4xl font-bold text-gray-900 mb-4 quote">Stay organized and inspired with Evernote</span>
          <button className="butnstart bg-gray-900 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg btnstart">
  Get Started
</button>


        </div>
        <div className="col-span-1">
          <img src={notes} className="w-full imgnotes" alt="notes" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
