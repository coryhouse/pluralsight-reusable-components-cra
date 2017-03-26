import React, {PropTypes} from 'react';
import Label from '../Label';

/**
 * Abstraction over text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker.
 */
const TextInput = ({htmlId, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) => {
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
        {...props}/>
        {children}
      {error && <div className="error" style={{color: 'red'}}>{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  /**
   * Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing.
   */
  htmlId: PropTypes.string.isRequired,

  /**
   * Input name. Recommend setting this to match object's property so a single change handler can be used.
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
  value: PropTypes.any,

  /**
   * String to display when error occurs
   */
  error: PropTypes.string,

  /**
   * Child component to display next to the input
   */
  children: PropTypes.node
};

export default TextInput;
