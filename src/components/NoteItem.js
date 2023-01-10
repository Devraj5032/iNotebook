import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = ({note}) => {

  const context = useContext(noteContext)
  const {deleteNote} = context

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <button type="button" className="btn btn-primary ">Edit</button>
          <button type="button" className="btn btn-primary mx-2" onClick={() => {
            deleteNote(note._id)
          }}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
