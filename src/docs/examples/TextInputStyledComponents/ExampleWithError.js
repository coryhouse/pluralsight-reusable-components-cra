import React from 'react';
import TextInputStyledComponents from 'ps-react/TextInputStyledComponents';

/**
 * Input with error
 */
export default class Example extends React.Component {
  render() {
    return (
      <TextInputStyledComponents
        htmlId="styled-components-with-error"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
       />
    )
  }
}
