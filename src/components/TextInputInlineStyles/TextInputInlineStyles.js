import React, {PropTypes} from 'react';

// Note: Can declare this is in a separate .js file if desired.
// Or, declare them inline if only used once.
const style = {
  asterisk: {
    color: 'red'
  },
  input: {
    error: {
      border: 'solid 1px red'
    }
  },
  fieldset: {
    marginBottom: 16
  }
}

/**
 * TextInput styled using React's inline styles
 */
const TextInput = ({name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) => {
  let inputStyle = {};
  if (error && error.length > 0) {
    inputStyle = style.input.error
  }

  return (
    <div style={style.asterisk}>
      <label htmlFor={name}>{label}</label>
      { required && <span style={style.required}> *</span> }
      <div className="field">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={inputStyle}
          {...props}/>
          {children}
        {error && <div style={style.error}>{error}</div>}
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
