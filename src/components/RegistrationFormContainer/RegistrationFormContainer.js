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
      passwordMinLength: 8
    };
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  // Returns a number from 0 to 100 that represents password quality.
  passwordQuality({hasAlpha, hasNumber, hasSpecialChar, meetsMinLength}) {
    let score = 0;
    const {password} = this.state.user;
    if (!password) return null;
    if (hasAlpha) score += 10;
    if (hasNumber) score += 10;
    if (hasSpecialChar) score += 10;

    if (meetsMinLength) {
      score += 70;
    } else {
      if (password.length * 10 > 60) {
        // if password hasn't reached minimum length, only return 60, regardless of length.
        // This way the user doesn't see a full 100% quality green bar until min length is reached.
        score += 60;
      } else {
        score += password.length * 10;
      }
    }
    return score;
  }

  passwordQualityTips({hasAlpha, hasNumber, hasSpecialChar, meetsMinLength}) {
    const tips = [];
    if (!hasAlpha) tips.push('Password must contain an alphabetical character.');
    if (!hasNumber) tips.push('Password must contain a number.');
    if (!hasSpecialChar) tips.push('Password must contain a special character.');
    if (!meetsMinLength) tips.push(`Password must be at least ${this.state.passwordMinLength} characters.`);
    return tips;
  }

  onSubmit = () => {
    const errors = {};
    const {user} = this.state;

    if (!user.email) errors.email = 'Email required.';
    const passwordAttributes = this.getPasswordAttributes();
    const passwordQualityTips = this.passwordQualityTips(passwordAttributes)
    if (passwordQualityTips.length > 0) {
      errors.password = passwordQualityTips[0];
    }

    this.setState({errors});
    const validationPassed = Object.getOwnPropertyNames(errors).length === 0;

    if (validationPassed) {
      this.props.onSubmit(user);
      this.setState({submitted: true});
    }
  }

  getPasswordAttributes() {
    const {password} = this.state.user;
    return {
      hasAlpha: password.match(/[a-z]/g),
      hasNumber: password.match(/\d+/g),
      hasSpecialChar: password.match(/[^a-zA-Z0-9]+/g),
      meetsMinLength: password.length >= this.state.passwordMinLength
    };
  }

  render() {
    const {errors, submitted, passwordMinLength} = this.state;
    const {email, password} = this.state.user;
    const {confirmationMessage} = this.props;
    const passwordAttributes = this.getPasswordAttributes();

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
          quality={this.passwordQuality(passwordAttributes)}
          tips={this.passwordQualityTips(passwordAttributes)}
          showVisibilityToggle
          minLength={passwordMinLength}
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
