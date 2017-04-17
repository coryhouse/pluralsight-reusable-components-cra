import React from 'react';
import RegistrationForm from 'ps-ui/RegistrationForm';

export default class ExampleRegistrationForm extends React.Component {
  onSubmit = () => {
    // Place logic here
  }

  render() {
    return <RegistrationForm onSubmit={this.onSubmit} />
  }
}
