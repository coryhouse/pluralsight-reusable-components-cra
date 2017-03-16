import React, {PropTypes} from 'react';
import defaultTheme from './defaultTheme';

/**
 * Themeable textInput styled using React's inline styles.
 * Some styles are overridden based on the theme prop.
 * Note how some of the component's built-in styles are always enforced.
 * For example, the input always has a red border when an error occurs,
 * even though the theme allows overriding the non-error state.
 * Note that you could centralize styling variables in a js
 * file if used in multiple components.
 */
const TextInput = ({name, label, type = "text", required = false, onChange, placeholder, value, error, children, theme={fontColor: 'black', accentColor: 'darkgray', borderWidth: '1px'}, ...props}) => {
  // Allow overriding the default input border color via theme.
  // But always set border color to the defaultTheme's error border (red) when there is an error.
  const inputBorderColor = (error && error.length > 0) ? defaultTheme.error.color : theme.accentColor;
  let inputStyle = {
    color: theme.fontColor,
    border: `solid ${theme.borderWidth} ${inputBorderColor}`
  };

  return (
    <div style={{marginBottom: defaultTheme.fieldset.marginBottom}}>
      <label htmlFor={name}>{label}</label>
      { required && <span style={{color: defaultTheme.error.color}}> *</span> }
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
        {error && <div style={{color: defaultTheme.error.color}}>{error}</div>}
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
  error: PropTypes.string,

  /**
   * Theme object
   */
  theme: PropTypes.object
};

export default TextInput;
