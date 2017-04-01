import React, { PropTypes } from 'react';
import ProgressBar from '../ProgressBar';
import EyeIcon from '../EyeIcon';
import TextInput from '../TextInput';

class PasswordInput extends React.Component {
  static defaultProps = {
    maxLength: 50,
    showVisibilityToggle: false,
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

  render() {
    const { htmlId, value, label, error, onChange, placeholder, maxLength, showVisibilityToggle, quality, ...props } = this.props;
    const { showPassword } = this.state;

    return (
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
            style={{ marginLeft: 5 }}>
            <EyeIcon />
          </a>
        }
        {
          value.length > 0 && quality && <ProgressBar percent={quality} width={130} />
        }
      </TextInput>
    );
  }
}

PasswordInput.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  showVisibilityToggle: PropTypes.bool,
  quality: PropTypes.number,
  error: PropTypes.string
};

export default PasswordInput;
