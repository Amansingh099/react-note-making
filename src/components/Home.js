import React from 'react';
import CreateArea from './CreateArea';
import Note from './Note';


export default function Home({ addNote, deleteNote, notes }) {
  return (
    <div>
      <div className="container mx-auto px-0">
        <div className="flex flex-row">
          <div className="w-3/12 px-0"></div>
          <div className="w-9/12 px-0">
            <CreateArea onAdd={addNote} />
            <div className="notesarea">
              {notes.map((noteItem, index) => {
                return (
                  <Note
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                    date={noteItem.date}
                  />
                );
              })}
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}
