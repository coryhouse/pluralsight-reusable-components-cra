import React from 'react';
import TextInput from 'ps-ui/TextInput';

/**
 * With error
 */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
       />
    )
  }
}
