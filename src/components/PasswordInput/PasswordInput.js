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
    this.setState((prevState) => {
      return { showPassword: !prevState.showPassword };
    });
    if (event) event.preventDefault();
  }

  // Returns a number from 0 to 100 that represents password quality.
  calculateScore(containsAlpha, containsNumber, containsSpecialChar) {
    let score = 0;
    const password = this.props.value;
    if (!password) return 0;
    if (containsAlpha) score += 10;
    if (containsNumber) score += 10;
    if (containsSpecialChar) score += 10;
    score += password.length > 7 ? 70 : password.length * 10;
    return score;
  }

  render() {
    const {value, label, error, name, onChange, placeholder, maxLength, minLength, showVisibilityToggle, showQuality, showTips, ...props} = this.props;
    const {showPassword} = this.state;
    const password = value; // for clarity below
    const containsAlpha = password.match(/[a-z]/g);
    const containsNumber = password.match(/\d+/g);
    const containsSpecialChar = password.match(/[^a-zA-Z0-9]+/g);
    const score = this.calculateScore(containsAlpha, containsNumber, containsSpecialChar);

    return (
      <div>
        <div style={{ float: 'left', width: 165 }}>
          <TextInput
            name={name}
            label={label || 'Password'}
            placeholder={placeholder}
            type={showPassword ? 'text' : 'password'}
            onChange={onChange}
            value={password}
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
                showQuality && password.length > 0 && <ProgressBar percent={score} />
              }
          </TextInput>
        </div>
        <div style={{ marginLeft: 170}}>
          {
            showTips && password.length > 0 &&
            <ul style={{ listStyleType: 'none', margin: 0}}>
              {!containsAlpha && <li>Add alphabetical character.</li>}
              {!containsNumber && <li>Add number.</li>}
              {!containsSpecialChar && <li>Add special character.</li>}
              {minLength && password.length < minLength && <li>Password must be at least {minLength} characters.</li>}
            </ul>
          }
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    );
  }
}

PasswordInput.propTypes = {
  value: PropTypes.any.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
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
