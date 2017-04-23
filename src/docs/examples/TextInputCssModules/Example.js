import React from 'react';
import TextInputCssModules from 'ps-react/TextInputCssModules';

/**
 * With CSS Modules
 */
export default class Example extends React.Component {
  render() {
    return (
      <div>
        <TextInputCssModules
          htmlId="text-input-css-modules-no-error"
          label="No Error"
          name="firstname"
          onChange={() => {}}
          required
        />

        <TextInputCssModules
          htmlId="text-input-css-modules-with-error"
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
