import React from 'react';
import TextInputInlineStyles from 'ps-ui/TextInputInlineStyles';

/**
 * With inline styles
 */
export default class Example extends React.Component {
  render() {
    return (
      <TextInputInlineStyles
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
       />
    )
  }
}
