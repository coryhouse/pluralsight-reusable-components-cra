import React, {PropTypes} from 'react';
import Label from '../Label';

const TextInput = ({htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) => {
  const inputStyle = {display: 'inline-block'};
  if (error && error.length > 0) {
    inputStyle.border = 'solid 1px red';
  }

  return (
    <div style={{marginBottom: 16}}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        type={type}
        id={htmlId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
        {...props}/>
        {children}
      {error && <div style={{color: 'red'}}>{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.string,
  children: PropTypes.node
};

export default TextInput;
