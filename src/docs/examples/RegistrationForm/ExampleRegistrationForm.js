import React from 'react';
import RegistrationForm from 'ps-ui/RegistrationForm';

class ExampleRegistrationForm extends React.Component {
  onSubmit = () => {
    // Place logic here
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />
  }
}

export default ExampleRegistrationForm;
