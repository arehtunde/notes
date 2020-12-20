const AddNote = ({value, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <input 
        name='input'
        placeholder='Title'
        value={value.input}
        onChange={onChange}
      />
      
      <textarea 
        name='textarea'
        placeholder='Take a note...'
        value={value.textarea}
        onChange={onChange}
      />

      <button>Add</button>
    </form>
  )
};

export default AddNote;