import React, { PropTypes } from 'react';
import PasswordInput from '../PasswordInput';
import TextInput from '../TextInput';

/**
 * Registration form that requires email and password
 */
const RegistrationForm = ({email, password, errors, onChange, onSubmit, submitButtonValue="Register"}) => {
  return (
    <div>
      <TextInput
        name="email"
        onChange={onChange}
        label="Email"
        value={email}
        error={errors.email}
        required />

      <PasswordInput
        name="password"
        value={password}
        onChange={onChange}
        showQuality
        showTips
        showVisibilityToggle
        minLength={7}
        maxLength={50}
        error={errors.password} />

      <input type="submit" value={submitButtonValue} onClick={onSubmit} />
    </div>
  );
}

RegistrationForm.propTypes = {
  /**
   * User email address
   */
  email: PropTypes.string.isRequired,

  /**
   * User password
   */
  password: PropTypes.string.isRequired,

  /**
   * Validation errors - Each error should have its own key
   */
  errors: PropTypes.object.isRequired,

  /**
   * Function to call on submit
   */
  onSubmit: PropTypes.func.isRequired,

  /**
   * Function to call on input change
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Submit button label
   */
  submitButtonValue: PropTypes.string
};

export default RegistrationForm;
