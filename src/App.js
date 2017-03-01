import React, { Component } from 'react';
import BlueKit from '../../src';
import componentsIndex from './componentsIndex'; // eslint-disable-line

class App extends Component {
  render() {
    return (
      <BlueKit componentsIndex={componentsIndex} />    
    );
  }
}

export default App;
