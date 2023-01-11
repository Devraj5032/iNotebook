import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3001";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  

  // Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNmQ4NDkzY2FiMmM2ZTQ3ZmYzYzI0In0sImlhdCI6MTY3MjQ2ODE1NX0.wjqJxgvPJzbLDSWwf3uZvwGtjXLH8bntqLN_IyNn0Vg",
      },
    });
    const json = await response.json();
    setNotes(json);
  };



  // Add a note
  const addNote = async (title, description, tag) => {
    // TODO: API call

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNmQ4NDkzY2FiMmM2ZTQ3ZmYzYzI0In0sImlhdCI6MTY3MjQ2ODE1NX0.wjqJxgvPJzbLDSWwf3uZvwGtjXLH8bntqLN_IyNn0Vg",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };



  // Delete a note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNmQ4NDkzY2FiMmM2ZTQ3ZmYzYzI0In0sImlhdCI6MTY3MjQ2ODE1NX0.wjqJxgvPJzbLDSWwf3uZvwGtjXLH8bntqLN_IyNn0Vg",
      },
    });

    const json = response.json();
    console.log(json);
    // TODO: API call
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };



  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNmQ4NDkzY2FiMmM2ZTQ3ZmYzYzI0In0sImlhdCI6MTY3MjQ2ODE1NX0.wjqJxgvPJzbLDSWwf3uZvwGtjXLH8bntqLN_IyNn0Vg",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();


    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
