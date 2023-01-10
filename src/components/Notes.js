import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const { notes , getNotes} = useContext(noteContext);

  useEffect(() => {
    getNotes()
  } , [])

  const updateNote = (note) => {

  }

  return (
    <>
    <AddNote />
    <div className="row my-3">
      <h1>Your Notes</h1>
      {notes.map((note) => (
        <NoteItem
          note={note}
          key={note._id}
          updateNote = {updateNote}
        />
      ))}
    </div>
    </>
  );
};

export default Notes;


// 4:36 #66