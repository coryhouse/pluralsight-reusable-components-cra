import React from 'react';
import TextInputInlineStylesThemed from 'ps-ui/TextInputInlineStylesThemed';

const uglyTheme = {fontColor: 'green', accentColor: 'orange', borderWidth: '5px'};

/**
 * With inline styles and theme support. Note how the theme allows setting a different border color for the input, but it doesn't allow overriding the red border for error states.
 */
export default class ExampleInlineStylesThemed extends React.Component {
  render() {
    return (
      <div>
        <TextInputInlineStylesThemed
          htmlId="inline-styles-themed"
          label="With no error"
          name="firstname"
          onChange={() => {}}
          required
          theme={uglyTheme}
        />

        <TextInputInlineStylesThemed
          htmlId="inline-styles-themed-with-error"
          label="With error"
          name="firstname"
          onChange={() => {}}
          required
          error="First Name is required."
          theme={uglyTheme}
        />
      </div>
    )
  }
}
