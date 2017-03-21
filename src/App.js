import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar';
import TextInput from './components/TextInput';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ProgressBar</h1>
        <ProgressBar percent={100} />

        <h1>TextInput</h1>
        <TextInput name="firstname" label="First Name" onChange={() => {}} />
      </div>
    );
  }
}

export default App;
