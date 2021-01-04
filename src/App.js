import { useState, useEffect } from 'react';
import AddNote from './components/addNote';
import EditNote from './components/editNote';
import Header from './components/header';

const App = () => {
  const [edit, setEdit] = useState('');
  const [search, setSearch] = useState('');
  const [text, setText] = useState({
    input: '', textarea: '',
  });
  const noteList = localStorage.getItem('noteKey')
    ? JSON.parse(localStorage.getItem('noteKey'))
    : [];
  const [noteArray, setNoteArray] = useState(noteList);

  useEffect(() => {
    const noteList = JSON.stringify(noteArray);
    localStorage.setItem('noteKey', noteList);
  }, [noteArray])

  const handleChange = event => {
    const value = event.target.value;

    setText({
      ...text,
      [event.target.name]: value,
    })
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (text.input === '' && text.textarea === '') {
      return alert('Empty Note')
    };

    const noteObject = {
      title: text.input,
      content: text.textarea,
      id: noteArray.length + 1,
    };

    setNoteArray([...noteArray, noteObject]);
    setText({
      input: '', textarea: '',
    });
  };

  const deleteNote = idToDel => {
    const filteredNote = noteArray.filter(note => note.id !== idToDel)
    setNoteArray(filteredNote)
  }

  const submitEdit = (event, idToEdit) => {
    event.preventDefault();

    const updatedNote = noteArray.map(note => {
      if (note.id === idToEdit) {
        return {
          id: note.id,
          title: event.target.input.value,
          content: event.target.textarea.value,
        }
      } else {
        return note;
      }
    })
    setNoteArray(updatedNote)
    setEdit('')
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
    <div className='font-sans'>
      <Header />
      <input 
        placeholder='Search notes'
        value={search}  
        onChange={handleSearch} 
      />

      <AddNote 
        value={text}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {
        filterNotes.map(note => (
          <div key={note.id}>
            <EditNote 
              note={note}
              edit={edit}
              submitEdit={submitEdit}
            />
            <button onClick={() => setEdit(note.id)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
};

export default App;