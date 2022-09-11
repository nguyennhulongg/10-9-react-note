import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import NotesList from "./components/NotesList"
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note",
    date: "10-9-2022",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "11-9-2022",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "12-9-2022",
    }
  ]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const saveNote = JSON.parse(localStorage.getItem('notes-app-data'));
    
    if (saveNote) {
      setNotes(saveNote);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes))
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text:text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return <div className="container">
    <Search handleSearchNote = {setSearchText}/>
      <NotesList 
        notes = { notes.filter(note => note.text.toLowerCase().includes(searchText))} 
        handleAddNote = { addNote }
        handleDeleteNote = {deleteNote}
      />
  </div>

}

export default App;
