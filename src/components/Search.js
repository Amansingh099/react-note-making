import React, { useState } from 'react';

import Note from './Note';
import './Search.css';
const SearchBar = ({deleteNote,notes}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    
  };
  
  return (
    <div>
      <div className="container mx-auto px-0"> 
   <div className="flex flex-row"> 
    <div className="w-3/12 px-0">  
  </div>
  <div className="w-9/12 px-0">  
  <form className="flex items-center max-w-md mx-auto searchform">
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-black focus:border-black-500 block w-full pl-12 py-3 pr-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black-500" 
               placeholder="Search your note..." 
               value={query}
               onChange={handleInputChange} required />
    </div>
    <button type="submit" className="p-3 ml-2 text-lg font-medium text-black rounded-lg border border-black-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>

<div className="notesarea">
      {notes.filter((item)=>{
        return query.toLowerCase()===''?item:item.title.toLowerCase().includes(query);
      }).map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div> 
  </div>
</div>

</div>
    </div>


  );
};

export default SearchBar;
