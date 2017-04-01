import React, {PropTypes} from 'react';
import Label from 'ps-ui/Label';
import './textInput.css';

/**
 * Abstraction over text input to enforce consistency in validation, labels, and required field marker.
 * Using BEM to encapsulate styling.
 */
const TextInputBem = ({htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) => {
  return (
    <div className="textinput">
      <Label htmlFor={htmlId} label={label} required={required} />
      <input
        type={type}
        name={name}
        className={error && 'textinput__input--state-error'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}/>
        {children}
      {error && <div className="textinput__error">{error}</div>}
    </div>
  );
};

TextInputBem.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInputBem;
