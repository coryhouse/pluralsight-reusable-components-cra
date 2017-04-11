import React from 'react';
import TextInputBem from 'ps-ui/TextInputBem';

/** With error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputBem
        htmlId="example-error"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
       />
    )
  }
}
