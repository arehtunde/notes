const EditNote = ({note, edit, submitEdit}) => {
  if (note.id !== edit) {
    return (
      <>
        <div>{note.title}</div>
        <div>{note.content}</div>
      </>
    )
  } else {
    return (
      <form onSubmit={(e) => submitEdit(e, note.id)}>
        <input 
          name='input'
          defaultValue={note.title} 
        />

        <textarea 
          name='textarea'
          defaultValue={note.content}
        />
        <button>Submit</button>
      </form>
    )
  }
};

export default EditNote;