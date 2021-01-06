const EditNote = ({note, edit, submitEdit, onEdit, onDelete}) => {
  if (note.id !== edit) {
    return (
      <>
        <div className='border mb-2'>
          <div className='mb-0.5 font-medium'>{note.title}</div>
          <div className=''>{note.content}</div>
        </div>

        <div className='border flex'>
          <button onClick={onEdit} className='mr-auto'>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </>
    )
  } else {
    return (
      <form onSubmit={(e) => submitEdit(e, note.id)}>
        <input 
          className='px-1 pb-1 mb-0.5 w-full focus:outline-none border-b'
          placeholder='Title'
          name='input'
          defaultValue={note.title} 
        />

        <textarea 
          className='px-1 pt-1 mb-1 w-full focus:outline-none border-b'
          placeholder='Take a note'
          name='textarea'
          defaultValue={note.content}
        />

        <div className='flex'>
          <button 
            className='text-black font-medium rounded-lg px-2 py-0.5 mr-auto bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50'
            onClick={(e) => submitEdit(e, note)}>
            Back
          </button>

          <button className='text-black font-medium rounded-lg px-2 py-0.5 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50'>Submit</button>
        </div>
      </form>
    )
  }
};

export default EditNote;