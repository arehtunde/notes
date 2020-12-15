import './App.css';
import Header from './components/header';
import AddNote from './components/addNote';
import EditNote from './components/editNote'
import { Input } from './components/input'
import { useState } from 'react';

const App = () => {
  const [noteArray, setNoteArray] = useState([]);
  const [search, setSearch] = useState('');
  const [newNote, setNewNote] = useState({
    input: '', textarea: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const date = new Date();
    const options = {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    
    const noteObject = {
      title: newNote.input,
      content: newNote.textarea,
      date: new Intl.DateTimeFormat('en-US', options).format(date),
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

  const handleSearch = (event) => {
    const value = event.target.value;

    setSearch(value)
  };

  const filterNotes = noteArray.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase()) || 
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Input placeholder='Search notes' onChange={handleSearch} value={search} />
      <form onSubmit={handleSubmit}>
        <AddNote 
          value={newNote}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>

      {
        filterNotes.map(note => 
          <EditNote note={note} key={note.id} />
        )
      }
    </div>
  )
};

export default App;
