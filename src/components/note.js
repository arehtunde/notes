const Note = ({value, onChange}) => {
  return (
    <>
      <div>
        <input 
          type='text'
          placeholder='Title'
          name='input'
          value={value.input}
          onChange={onChange}
        />
      </div>
      <div>
        <textarea 
          placeholder='Take a note...'
          name='textarea'
          value={value.textarea}
          onChange={onChange}
        />
      </div>
    </>
  )
};

export default Note