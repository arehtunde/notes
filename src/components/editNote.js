const EditNote = ({note, edit, submitEdit, onEdit, onDelete}) => {
  if (note.id !== edit) {
    return (
      <>
        <div className='mb-2'>
          <div className='mb-0.5 font-medium truncate'>{note.title}</div>
          <div className='free'>{note.content}</div>
        </div>

        <div className='flex mt-auto'>
          <button className='text-black font-medium rounded-lg px-2 py-0.5 mr-auto bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transform hover:scale-105' onClick={onEdit}>View</button>
          
          <button className='text-black font-medium rounded-lg px-2 py-0.5 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transform hover:scale-105' onClick={onDelete}>Delete</button>
        </div>
      </>
    )
  } else {
    return (
      <form onSubmit={(e) => submitEdit(e, note.id)} className=''>
        <input 
          className='px-1 pb-1 mb-1 w-full focus:outline-none border-b'
          type='text'
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
            className='text-black font-medium rounded-lg px-2 py-0.5 mr-auto bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transform hover:scale-105'
            onClick={(e) => submitEdit(e, note)}>Back
          </button>

          <button className='text-black font-medium rounded-lg px-2 py-0.5 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transform hover:scale-105'>Submit</button>
        </div>
      </form>
    )
  }
};

export default EditNote;