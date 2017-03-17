import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import TextInput from 'ps-ui/TextInput';

const ThemedTextInput = styled(TextInput)`
  color: ${props => props.theme.fontColor};
  border: solid ${props => props.theme.borderWidth} ${props => props.theme.accentColor};
`;

// Create a plain theme
const plainTheme = {
  fontColor: 'black',
  accentColor: 'lightgrey',
  borderWidth: '1px'
};

// Create an ugly theme
const uglyTheme = {
  fontColor: 'green',
  accentColor: 'red',
  borderWidth: '5px'
};

/**
 * Button with two different themes applied
 */
const MyApp = () => {
  return (
    <div>
      {/* All children of this component will receieve the plain theme via React's context */}
      <ThemeProvider theme={plainTheme}>
        <ThemedTextInput
          label="Text input with plain theme"
          name="plainTheme"
          onChange={() => {}} />
      </ThemeProvider>
      {/* All children of this component will receive the ugly theme via React's context */}
      <ThemeProvider theme={uglyTheme}>
        <ThemedTextInput
          label="Text input with ugly theme"
          name="uglyTheme"
          onChange={() => {}} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
