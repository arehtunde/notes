import './App.css';
import Header from './components/header';
import Note from './components/note';
import { useState } from 'react';

const App = () => {
 
  const [newNote, setNewNote] = useState({
    input: '', textarea: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newNote)

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
        <Note 
          value={newNote}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
};

export default App;
