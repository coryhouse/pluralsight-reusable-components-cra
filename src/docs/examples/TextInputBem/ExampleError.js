import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** With error */
export default class ExampleError extends React.Component {
  render() {
    return (
      <TextInputBEM
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
