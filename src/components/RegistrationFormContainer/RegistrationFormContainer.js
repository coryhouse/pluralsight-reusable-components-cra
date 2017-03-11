import React, {PropTypes} from 'react';
import RegistrationForm from 'ps-ui/RegistrationForm';

/**
 * Easily create a registration form with built-in validation. Just pass a function to call when the user's information is submitted.
 */
class RegistrationFormContainer extends React.Component {
  static defaultProps = {
    confirmationMessage: "Thanks for registering!"
  };

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
      this.props.onSubmit(user);
      this.setState({submitted: true});
    }
  }

  render() {
    const {errors, submitted} = this.state;
    const {email, password} = this.state.user;
    const {confirmationMessage} = this.props;

    return (
      submitted ?
      <h2>{confirmationMessage}</h2> :
      <RegistrationForm
        email={email}
        password={password}
        errors={errors}
        onChange={this.onChange}
        onSubmit={this.onSubmit} />
    )
  }
}

RegistrationFormContainer.propTypes = {
  confirmationMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
}

export default RegistrationFormContainer;
