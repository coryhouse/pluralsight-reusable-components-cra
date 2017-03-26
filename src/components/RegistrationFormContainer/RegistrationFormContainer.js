import React, {PropTypes} from 'react';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/**
 * Registration form with built-in validation.
 * Just pass a function to call when the user's information is submitted.
 */
class RegistrationFormContainer extends React.Component {
  static defaultProps = {
    confirmationMessage: "Thanks for registering!"
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false
    };
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  onSubmit = () => {
    const errors = {};
    const {user} = this.state;

    // Using ref to call isValid on PasswordInput component.
    // Downside: now this component is tightly coupled to the child
    debugger;
    let passwordIsValid = this.passwordInput.isValid();
    if (!user.email) errors.email = 'Email required.';
    if (!user.password) errors.password = 'Password required.';
    this.setState({errors});
    const validationPassed = Object.getOwnPropertyNames(errors).length === 0;

    if (validationPassed) {
      this.props.onSubmit(user);
      this.setState({submitted: true});
    }
  }

  render() {
    const {errors, submitted} = this.state;
    const {email, password} = this.state.user;
    const {confirmationMessage} = this.props;

    return (
      submitted ?
      <h2>{confirmationMessage}</h2> :
      <div>
        <TextInput
          htmlId="registration-form-email"
          name="email"
          onChange={this.onChange}
          label="Email"
          value={email}
          error={errors.email}
          required />

        <PasswordInput
          htmlId="registration-form-password"
          name="password"
          value={password}
          onChange={this.onChange}
          showQuality
          showTips
          showVisibilityToggle
          maxLength={50}
          error={errors.password}
          ref={(input) => { this.passwordInput = input; }} />

        <input type="submit" value="Register" onClick={this.onSubmit} />
      </div>
    )
  }
}

RegistrationFormContainer.propTypes = {
  confirmationMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

export default RegistrationFormContainer;
