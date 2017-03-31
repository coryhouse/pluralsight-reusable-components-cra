import React, {PropTypes} from 'react';
import Label from 'ps-ui/Label';
import styles from './textInput.css';

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
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'date', 'password']),
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInputCssModules;
