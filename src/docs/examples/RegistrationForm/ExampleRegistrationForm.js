import React from 'react';
import RegistrationForm from 'ps-ui/RegistrationForm';

/**
 * Example registration form
 */
export default class ExampleRegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false
    };
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  onSubmit = () => {
    const errors = {};
    const {user} = this.state;
    if (!user.email) errors.email = 'Email required.';
    if (!user.password) errors.password = 'Password required.';
    this.setState({errors});
    const validationPassed = Object.getOwnPropertyNames(errors).length === 0;

    if (validationPassed) {
      // Submit user on success here
      this.setState({submitted: true});
    }
  }

  render() {
    const {errors, submitted} = this.state;
    const {email, password} = this.state.user;
    return (
      submitted ?
      <h2>Thanks for registering!</h2> :
      <RegistrationForm
        email={email}
        password={password}
        errors={errors}
        onChange={this.onChange}
        onSubmit={this.onSubmit} />
    )
  }
}
