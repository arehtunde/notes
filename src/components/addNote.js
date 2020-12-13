import { Input, Textarea } from './input'

const AddNote = ({value, onChange}) => {
  return (
    <>
      <div>
        <Input 
          name='input'
          placeholder='Title'
          value={value.input}
          onChange={onChange}
        />
      </div>
      <div>
        <Textarea 
          name='textarea'
          placeholder='Take a note...'
          value={value.textarea}
          onChange={onChange}
        />
      </div>
    </>
  )
};

export default AddNote;