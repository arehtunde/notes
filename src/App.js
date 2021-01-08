import { useState, useEffect } from 'react';
import AddNote from './components/addNote';
import EditNote from './components/editNote';
import { Header, Footer } from './components/header';

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
    <div className='font-sans border-box bg-gray-100 flex flex-col h-screen'>
      <Header />
      <div className='mx-3'>
        <input 
          className='rounded-full py-1 px-6 my-2 w-full text-lg font-medium italic focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-200 placeholder-gray-600 focus:placeholder-gray-400'
          type='search'
          placeholder='Search notes'
          value={search}  
          onChange={handleSearch} 
        />
      </div>

      <AddNote 
        value={text}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <div className='gird m-3'>
        {
          filterNotes.map(note => (
            <div key={note.id} className='rounded-lg p-3 bg-white shadow-md flex flex-col'>
              <EditNote 
                note={note}
                edit={edit}
                submitEdit={submitEdit}
                onEdit={() => setEdit(note.id)}
                onDelete={() => deleteNote(note.id)}
              />
            </div>
          ))
        }
      </div>

      <Footer />
    </div>
  )
};

export default App;