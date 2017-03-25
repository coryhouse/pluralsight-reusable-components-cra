import React, { PropTypes } from 'react';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';

const RegistrationForm = ({email, password, errors, onChange, onSubmit, submitButtonValue="Register"}) => {
  return (
    <div>
      <TextInput
        htmlId="registration-form-email"
        onChange={onChange}
        label="Email"
        value={email}
        error={errors.email}
        required />

      <PasswordInput
        htmlId="registration-form-password"
        value={password}
        onChange={onChange}
        showQuality
        showTips
        showVisibilityToggle
        maxLength={50}
        error={errors.password} />

      <input type="submit" value={submitButtonValue} onClick={onSubmit} />
    </div>
  );
}

RegistrationForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  submitButtonValue: PropTypes.string
};

export default RegistrationForm;
