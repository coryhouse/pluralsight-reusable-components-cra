import React, { PropTypes } from 'react';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';
import TextInput from '../TextInput';

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
    this.setState(prevState => {
      return { showPassword: !prevState.showPassword };
    });
    if (event) event.preventDefault();
  }

  containsAlpha = () => this.props.value.match(/[a-z]/g);

  containsNumber = () => this.props.value.match(/\d+/g);

  containsSpecialChar = () => this.props.value.match(/[^a-zA-Z0-9]+/g);

  meetsMinLength = () => this.props.value.length >= this.props.minLength;

  isValid = () => this.containsAlpha() && this.containsNumber() && this.containsSpecialChar() && this.meetsMinLength();

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
    const {htmlId, name, value, label, error, onChange, placeholder, maxLength, minLength, showVisibilityToggle, showQuality, showTips, ...props} = this.props;
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
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  showVisibilityToggle: PropTypes.bool,
  showQuality: PropTypes.bool,
  error: PropTypes.string,
  showTips: PropTypes.bool
};

export default PasswordInput;
