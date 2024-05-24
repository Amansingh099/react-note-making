import React, { useState, useEffect } from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchBar from "./Search";
import Trash from "./Trash";
import Sidebar from "./Sidebar";
import Account from "./Account";
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  const { state } = location;
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [deletedNotes, setDeletedNotes] = useState(JSON.parse(localStorage.getItem("deletedNotes")) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("deletedNotes", JSON.stringify(deletedNotes));
  }, [deletedNotes]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, { ...newNote, date: new Date().toLocaleDateString() }];
    });
  }

  function deleteNote(id) {
    const deletedNote = notes[id];
    setDeletedNotes((prevDeletedNotes) => [...prevDeletedNotes, deletedNote]);
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="appbody">
      <Sidebar deletedNotes={deletedNotes} />
      
        <Routes>
          <Route index element={<Home addNote={addNote} deleteNote={deleteNote} notes={notes} />} />
          <Route path="searchbar" element={<SearchBar deleteNote={deleteNote} notes={notes} />} />
          <Route path="trash" element={<Trash deletedNotes={deletedNotes} setDeletedNotes={setDeletedNotes} />} />
          <Route path="account" element={<Account email={state && state.email} />} />
        </Routes>
     
    </div>
  );
}

export default App;
