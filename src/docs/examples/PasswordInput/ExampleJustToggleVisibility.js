import React from 'react';
import PasswordInput from 'ps-ui/PasswordInput';

/** Just toggle visibility enabled */
class ExampleJustToggleVisibility extends React.Component {
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
          htmlId="password-input-just-toggle-visibility"
          name="password"
          onChange={(event) => this.setState({ password: event.target.value })}
          value={this.state.password}
          minLength={8}
          showVisibilityToggle
          {...this.props} />
      </div>
    )
  }
}

export default ExampleJustToggleVisibility;
