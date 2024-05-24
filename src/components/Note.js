import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Note.css"; // Import CSS file for Note component

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span className="date">{props.date}</span>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
