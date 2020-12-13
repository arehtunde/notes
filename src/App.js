import './App.css';
import Header from './components/header';
import AddNote from './components/addNote';
import EditNote from './components/editNote'
import { useState } from 'react';

const App = () => {
  const [noteArray, setNoteArray] = useState([]);
  const [newNote, setNewNote] = useState({
    input: '', textarea: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const noteObject = {
      title: newNote.input,
      content: newNote.textarea,
      date: new Date().toISOString(),
      id: noteArray.length + 1,
    }

    setNoteArray(noteArray.concat(noteObject));
    setNewNote({
      input: '', textarea: '',
    })
  };

  const handleChange = (event) => {
    const value = event.target.value;

    setNewNote({
    ...newNote,
    [event.target.name]: value,
    })
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <AddNote 
          value={newNote}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>

      {
        noteArray.map(note => 
          <EditNote note={note} key={note.id} />
        )
      }
    </div>
  )
};

export default App;
