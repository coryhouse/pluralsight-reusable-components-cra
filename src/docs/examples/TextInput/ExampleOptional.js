import React from 'react';
import TextInput from 'ps-ui/TextInput';

/**
 * Optional field
 */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInput
        label="First Name"
        name="firstname"
        onChange={() => {}}
       />
    )
  }
}
