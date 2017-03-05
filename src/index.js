import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import './index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';

ReactDOM.render(
  <Docs />,
  document.getElementById('root')
);
