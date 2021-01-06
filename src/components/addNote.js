const AddNote = ({value, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className='rounded-lg m-2 p-2 bg-white shadow-md'>
      <input 
        className='px-1 pb-1 mb-0.5 w-full focus:outline-none border-b'
        name='input'
        placeholder='Title'
        value={value.input}
        onChange={onChange}
      />
      
      <textarea 
        className='px-1 pb-1 mb-0.5 w-full focus:outline-none border-b'
        name='textarea'
        placeholder='Take a note...'
        value={value.textarea}
        onChange={onChange}
      />

      <button className='ml-60 text-black font-medium rounded-lg px-2 py-0.5 mr-auto bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50'>Add</button>
    </form>
  )
};

export default AddNote;