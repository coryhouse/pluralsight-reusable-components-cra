import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import TextInput from 'ps-react/TextInput';

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
 * TextInput with two different themes applied
 */
const MyApp = () => {
  return (
    <div>
      {/* All children of this component will receieve the plain theme via React's context */}
      <ThemeProvider theme={plainTheme}>
        <ThemedTextInput
          htmlId="themed-input-plain"
          label="Text input with plain theme"
          name="plain"
          onChange={() => {}} />
      </ThemeProvider>
      {/* All children of this component will receive the ugly theme via React's context */}
      <ThemeProvider theme={uglyTheme}>
        <ThemedTextInput
          htmlId="themed-input-ugly"
          label="Text input with ugly theme"
          name="ugly"
          onChange={() => {}} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
