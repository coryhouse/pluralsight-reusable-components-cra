import React, {PropTypes} from 'react';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

/**
 * Registration form with built-in validation.
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
      submitted: false,
    };

    // Need not be in state since not used in render
    this.passwordMinLength = 8
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  // Returns a number from 0 to 100 that represents password quality.
  passwordQuality(password) {
    let score = 0;
    if (!password) return null;
    const {hasAlpha, hasNumber, hasSpecialChar, meetsMinLength} = this.getPasswordAttributes(password);
    if (hasAlpha) score += 10;
    if (hasNumber) score += 10;
    if (hasSpecialChar) score += 10;

    if (meetsMinLength) {
      score += 70;
    } else {
      if (password.length * 10 > 60) {
        // If password hasn't reached minimum length, only return 60, regardless of length.
        // This way the user doesn't see a full 100% quality green bar until min length is reached.
        score += 60;
      } else {
        score += password.length * 10;
      }
    }
    return score;
  }

  getPasswordAttributes(password) {
    return {
      hasAlpha: password.match(/[a-z]/g),
      hasNumber: password.match(/\d+/g),
      hasSpecialChar: password.match(/[^a-zA-Z0-9]+/g),
      meetsMinLength: password.length >= this.passwordMinLength
    };
  }

  validate({email, password}) {
    const errors = {};

    if (!email) {
      errors.email = 'Email required.';
    }

    // For now, just enforcing a minimum length.
    if (password.length < this.passwordMinLength) {
      errors.password = `Password must be at least ${this.passwordMinLength} characters.`;
    }

    this.setState({errors});
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = () => {
    const {user} = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({submitted: true});
    }
  }

  render() {
    const {errors, submitted} = this.state;
    const {email, password} = this.state.user;

    return (
      submitted ?
      <h2>{this.props.confirmationMessage}</h2> :
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
          quality={this.passwordQuality(password)}
          showVisibilityToggle
          maxLength={50}
          error={errors.password} />

        <input type="submit" value="Register" onClick={this.onSubmit} />
      </div>
    )
  }
}

RegistrationFormContainer.propTypes = {
  /**
   * Message displayed upon successful submission
   */
  confirmationMessage: PropTypes.string,

  /**
   * Called when form is submitted
   */
  onSubmit: PropTypes.func.isRequired
}

export default RegistrationFormContainer;
