import { useState } from 'react';
import { Input, Textarea } from './input'

const EditNote = ({note}) => {
  const [edit, setEdit] = useState({
    title: note.title, 
    content: note.content,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEdit = (event) => {
    const value = event.target.value;

    setEdit({
      ...edit,
      [event.target.name]: value,
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        name='title'
        value={edit.title}
        onChange={handleEdit}
      />

      <Textarea 
        name='content'
        value={edit.content}
        onChange={handleEdit}
      />
      <p>{note.date}</p>
      <button>save</button>
    </form>
  )
};

export default EditNote;