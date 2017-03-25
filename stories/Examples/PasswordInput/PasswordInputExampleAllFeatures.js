import React from 'react';
import PasswordInput from '../../../src/components/PasswordInput';

class PasswordInputExampleAllFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ''
    };
  }

  render() {
    return (
      <div>
        <PasswordInput
          name="password"
          onChange={event => this.setState({ password: event.target.value })}
          value={this.state.password}
          minLength={8}
          placeholder="Enter password"
          showVisibilityToggle
          showQuality
          showTips
          {...this.props} />
      </div>
    )
  }
}

export default PasswordInputExampleAllFeatures;
