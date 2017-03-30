import React, {PropTypes} from 'react';
import Label from 'ps-ui/Label';
import styles from './textInput.css';

/**
 * Abstraction over text input to enforce validation, label, and required field marker consistency
 */
const TextInputCssModules = ({htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) => {
  let inputClass = '';
  if (error && error.length > 0) {
    inputClass+= styles.inputError;
  }

  return (
    <div className={styles.fieldset}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <div>
        <input
          type={type}
          name={name}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}/>
          {children}
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

TextInputCssModules.propTypes = {
  /**
   * Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing.
   */
  htmlId: PropTypes.string.isRequired,

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

export default TextInputCssModules;
