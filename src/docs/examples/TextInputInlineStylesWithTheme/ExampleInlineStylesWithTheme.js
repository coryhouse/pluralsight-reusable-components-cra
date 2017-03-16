import React from 'react';
import TextInputInlineStylesWithTheme from 'ps-ui/TextInputInlineStylesWithTheme';

/**
 * With inline styles and theme support. Note how the theme allows setting a different border color for the input, but it doesn't allow overriding the red border for error states.
 */
export default class Example extends React.Component {
  render() {
    return (
      <div>
        <TextInputInlineStylesWithTheme
          label="With no error"
          name="firstname"
          onChange={() => {}}
          required
          theme={{fontColor: 'green', accentColor: 'orange', borderWidth: '5px'}}
        />

        <TextInputInlineStylesWithTheme
          label="With error"
          name="firstname"
          onChange={() => {}}
          required
          error="First Name is required."
          theme={{fontColor: 'green', accentColor: 'orange', borderWidth: '5px'}}
        />
      </div>
    )
  }
}
