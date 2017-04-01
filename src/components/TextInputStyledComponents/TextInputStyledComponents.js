import React, { PropTypes } from 'react';
import Label from 'ps-ui/Label';
import styled from 'styled-components';

/**
 * TextInput using styled-components
 */
const TextInput = ({ htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props }) => {
  const Error = styled.div`
    color: red;
  `

  const Input = styled.input`
    border: ${error => error.length > 0 ? 'solid 1px red;' : null};
    display: block;
  `;

  const Fieldset = styled.div`
    margin-bottom: 16px;
  `;

  return (
    <Fieldset>
      <Label htmlFor={htmlId} label={label} required={required} />
      <Input
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props} />
      {children}
      {error && <Error>{error}</Error>}
    </Fieldset>
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
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
