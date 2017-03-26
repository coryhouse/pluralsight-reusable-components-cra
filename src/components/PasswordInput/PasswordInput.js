import React, { PropTypes } from 'react';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';
import TextInput from '../TextInput';

/**
 * Password input with integrated label, quality tips, and show password toggle.
 */
class PasswordInput extends React.Component {
  static defaultProps = {
    minLength: 5,
    maxLength: 50,
    showVisibilityToggle: false,
    showQuality: false,
    showTips: false,
    label: 'Password'
  };

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    }
  }

  toggleShowPassword = (event) => {
    this.setState((prevState) => {
      return { showPassword: !prevState.showPassword };
    });
    if (event) event.preventDefault();
  }

  containsAlpha() {
    return this.props.value.match(/[a-z]/g);
  }

  containsNumber() {
    return this.props.value.match(/\d+/g);
  }

  containsSpecialChar() {
    return this.props.value.match(/[^a-zA-Z0-9]+/g);
  }

  meetsMinLength() {
    return this.props.value.length >= this.props.minLength;
  }

  isValid() {
    return false; //this.containsAlpha() && this.containsNumber() && this.containsSpecialChar() && this.meetsMinLength();
  }

  // Returns a number from 0 to 100 that represents password quality.
  calculateScore() {
    let score = 0;
    const password = this.props.value;
    if (!password) return 0;
    if (this.containsAlpha()) score += 10;
    if (this.containsNumber()) score += 10;
    if (this.containsSpecialChar()) score += 10;
    score += password.length > 7 ? 70 : password.length * 10;
    return score;
  }

  render() {
    const {htmlId, value, label, error, onChange, placeholder, maxLength, minLength, showVisibilityToggle, showQuality, showTips, ...props} = this.props;
    const {showPassword} = this.state;

    return (
      <div>
        <div style={{ float: 'left', width: 165 }}>
          <TextInput
            htmlId={htmlId}
            label={label || 'Password'}
            placeholder={placeholder}
            type={showPassword ? 'text' : 'password'}
            onChange={onChange}
            value={value}
            maxLength={maxLength}
            error={error}
            required
            {...props}>
              {
                showVisibilityToggle &&
                <a
                  href="#"
                  onClick={this.toggleShowPassword}
                  style={{marginLeft: 5}}>
                  <EyeIcon />
                </a>
              }
              <br />
              {
                showQuality && value.length > 0 && <ProgressBar percent={this.calculateScore()} />
              }
          </TextInput>
        </div>
        <div style={{ marginLeft: 170}}>
          {
            showTips && value.length > 0 &&
            <ul style={{ listStyleType: 'none', margin: 0}}>
              {!this.containsAlpha() && <li>Add alphabetical character.</li>}
              {!this.containsNumber() && <li>Add number.</li>}
              {!this.containsSpecialChar() && <li>Add special character.</li>}
              {!this.meetsMinLength() && <li>Password must be at least {minLength} characters.</li>}
            </ul>
          }
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  /**
   * Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing.
   */
  htmlId: PropTypes.string.isRequired,

  /**
   * Input name. Recommend setting this to match object's property so a single change handler can be used by convention.
   */
  name: PropTypes.string.isRequired,

  /**
   * Password value
   */
  value: PropTypes.any.isRequired,

  /**
   * Input label
   */
  label: PropTypes.string,

  /**
   * Function called when password input value changes
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Max password length accepted
   */
  maxLength: PropTypes.number.isRequired,

  /**
   * Min password length accepted
   */
  minLength: PropTypes.number,

  /**
   * Placeholder displayed when no password is entered
   */
  placeholder: PropTypes.string,

  /**
   * Set to true to show the toggle for displaying the currently entered password
   */
  showVisibilityToggle: PropTypes.bool,

  /**
   * Set to true to display password quality visually via ProgressBar
   */
  showQuality: PropTypes.bool,

  /**
   * Validation error to display
   */
  error: PropTypes.string,

  /**
   * Set to true to show tips for improving the password
   */
  showTips: PropTypes.bool
};

export default PasswordInput;
