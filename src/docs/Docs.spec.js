import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './Docs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Docs />, div);
});
