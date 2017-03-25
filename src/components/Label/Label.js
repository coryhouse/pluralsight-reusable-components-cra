import React, {PropTypes} from 'react';

const Label = ({htmlFor, label, required}) => {
  return (
    <label style={{display: 'block'}} htmlFor={htmlFor}>
      {label} { required && <span style={{color: 'red'}}> *</span> }
    </label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
};

export default Label;
