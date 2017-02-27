import React, { Component } from 'react';
import './App.css';
import ReactAtellier from 'react-atellier';
import TextInput from './components/TextInput';

const componentList = [{
  componentName : "dognuts",
  component : TextInput
}];

class App extends Component {
  render() {
    return (
      <ReactAtellier components={componentList} />
    );
  }
}

export default App;
