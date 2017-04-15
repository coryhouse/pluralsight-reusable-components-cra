import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import styled from 'styled-components';

/**
 * TextInput using styled-components
 */
function TextInputStyledComponentsThemed({name, label, type = "text", required = false, onChange, placeholder, value, error, children, theme={ main: 'orange' }, ...props}) {

  const ErrorText = styled.div`
    color: red;
  `

  const Input = styled.input`
    border: ${error => error ? 'solid 1px red' : null};
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
        {...props}/>
      {children}
    {error && <ErrorText>{error}</ErrorText>}
    </Fieldset>
  );
};

TextInputStyledComponentsThemed.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node,

  /** Theme */
  theme: PropTypes.object
};

export default TextInputStyledComponentsThemed;
