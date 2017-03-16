import React from 'react';
import TextInputCssModules from 'ps-ui/TextInputCssModules';

/**
 * With CSS Modules
 */
export default class Example extends React.Component {
  render() {
    return (
      <div>
      <TextInputCssModules
        label="No Error"
        name="firstname"
        onChange={() => {}}
        required
       />

      <TextInputCssModules
        label="With Error"
        name="firstname"
        onChange={() => {}}
        required
        error="First name is required."
       />
      </div>
    )
  }
}
