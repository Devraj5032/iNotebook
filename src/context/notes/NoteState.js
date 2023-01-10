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
    console.log(json);
    setNotes(json)
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

    const json = response.json();

    console.log("Adding a new note");
    const note = {
      _id: "63b1d4e3849dg7f7hte0105406b",
      user: "63a6d8493cab2c6e47ff3c24",
      title: title,
      description: description,
      tag: tag,
      date: "2023-01-01T18:45:55.305Z",
      __v: 0,
    };
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
    console.log("Note deleted with id = " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNmQ4NDkzY2FiMmM2ZTQ3ZmYzYzI0In0sImlhdCI6MTY3MjQ2ODE1NX0.wjqJxgvPJzbLDSWwf3uZvwGtjXLH8bntqLN_IyNn0Vg",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();

    // Logic to edit in client
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
