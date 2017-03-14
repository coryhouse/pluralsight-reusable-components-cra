import React from 'react';
import TextInputStyledComponents from 'ps-ui/TextInputStyledComponents';

/**
 * Input without error
 */
export default class Example extends React.Component {
  render() {
    return (
      <TextInputStyledComponents
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
       />
    )
  }
}
