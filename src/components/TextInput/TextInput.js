import React, {PropTypes} from 'react';
import './textInput.css';

/**
 * Abstraction over text input to enforce consistency in validation, labels, and required field marker.
 * Using plain CSS with BEM to encapsulate styling.
 */
const TextInput = ({name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) => {
  let inputClass = '';
  if (error && error.length > 0) {
    inputClass+= 'textinput__input--state-error';
  }

  return (
    <div className="textinput">
      <label htmlFor={name}>{label}</label>
      { required && <span className="textinput__asterisk"> *</span> }
      <div className="field">
        <input
          type={type}
          name={name}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}/>
          {children}
        {error && <div className="textinput__error">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  /**
   * Input name
   */
  name: PropTypes.string.isRequired,

  /**
   * Input label
   */
  label: PropTypes.string.isRequired,

  /**
   * Input type
   */
  type: PropTypes.oneOf(['text', 'number', 'date', 'password']),

  /**
   * Mark label with asterisk if set to true
   */
  required: PropTypes.bool,

  /**
   * Function to call onChange
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Placeholder to display when empty
   */
  placeholder: PropTypes.string,

  /**
   * Value
   */
  value: PropTypes.string,

  /**
   * String to display when error occurs
   */
  error: PropTypes.string
};

export default TextInput;
