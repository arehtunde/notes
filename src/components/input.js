const Input = (props) => {
  const { value, onChange, name, placeholder } = props;
  
  return (
    <input 
      type='text'
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
};

const Textarea = (props) => {
  const { value, onChange, name, placeholder } = props;

  return (
    <textarea 
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
};

export { Input, Textarea };