import React from 'react';
import TextInput from 'ps-ui/TextInput';

/**
 * Required field
 */
export default class ExampleRequired extends React.Component {
  onChange = () => {

  }

  render() {
    return (
      <TextInput
        label="First Name"
        name="firstname"
        onChange={this.onChange}
        required />
    )
  }
}
