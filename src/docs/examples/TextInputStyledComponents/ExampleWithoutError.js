import React from 'react';
import TextInputStyledComponents from 'ps-react/TextInputStyledComponents';

/**
 * Input without error
 */
export default class Example extends React.Component {
  render() {
    return (
      <TextInputStyledComponents
        htmlId="styled-components-no-error"
        label="First Name"
        name="firstname"
        onChange={() => {}}
        required
       />
    )
  }
}
