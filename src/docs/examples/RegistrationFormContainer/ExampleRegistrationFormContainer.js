import React from 'react';
import RegistrationFormContainer from 'ps-ui/RegistrationFormContainer';

class ExampleRegistrationFormContainer extends React.Component {
  onSubmit = () => {
    // Place logic here
  }

  render() {
    return <RegistrationFormContainer onSubmit={this.onSubmit} />
  }
}

export default ExampleRegistrationFormContainer;
