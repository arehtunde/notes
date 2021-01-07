const AddNote = ({value, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className='rounded-lg mt-0 m-3 p-3 bg-white shadow-md'>
      <input 
        className='px-1 pb-1 mb-1 w-full focus:outline-none border-b'
        name='input'
        placeholder='Title'
        value={value.input}
        onChange={onChange}
      />
      
      <textarea 
        className='px-1 pb-1 mb-1 w-full focus:outline-none border-b'
        name='textarea'
        placeholder='Take a note...'
        value={value.textarea}
        onChange={onChange}
      />

      <button className='block text-black font-medium rounded-lg px-2 py-0.5 ml-auto bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transform hover:scale-105'>Add</button>
    </form>
  )
};

export default AddNote;