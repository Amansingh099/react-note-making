import React from 'react'
import Note from './Note';
import Footer from './Footer';
import './Trash.css'
import trashCanImage from'./images.png'
export default function Trash({deletedNotes, setDeletedNotes}) {
    const deleteNote = (id) => {
        setDeletedNotes((prevNotes) => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }; 
  return (
    <div>
    <div>
      <div className="container mx-auto px-0"> 
   <div className="flex flex-row"> 
    <div className="w-3/12 px-0">  
  </div>
  <div className="w-9/12 px-0">  
  
    <div className="notesarea">
    <img src={trashCanImage} className="trashimg"alt="Trash Can" />
      {deletedNotes.map((noteItem, index) => {
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

<Footer />
</div>
    </div>
    </div>
  )
}
