import { useState } from 'react';
import { Input, Textarea } from './input'

const EditNote = ({note}) => {
  const [edit, setEdit] = useState({
    title: note.title, 
    content: note.content,
    date: note.date,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setEdit({
      ...edit,
      [event.target.name]: value,
    })
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
      <p>{edit.date}</p>
      <button>save</button>
    </form>
  )
};

export default EditNote;