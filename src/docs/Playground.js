import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
//import ExampleRequiredCode from '!raw-loader!./examples/TextInput/ExampleRequired';
import TextInput from '../components/TextInput/TextInput';
//import style from './Playground.css';

class Playground extends React.Component {
  static propTypes = {
    className: React.PropTypes.string
  };

  state = {
    code: `class ExampleRequired extends React.Component {
  onChange = () => {

  }

  render() {
    return (
      <TextInput
        label="First Name"
        name="firstname"
        onChange={this.onChange}
        required />
    )
  }
}

return <ExampleRequired />`
  };

  handleCodeChange = (code) => {
    this.setState({ code });
  };

  loadCode (code) {
    this.refs.editor.setCode(code);
  }

  render () {
    return (
      <aside className={this.props.className}>
        <Editor
          ref="editor"
          codeText={this.state.code}
          onChange={this.handleCodeChange}
        />
        <Preview
          code={this.state.code}
        />
      </aside>
    );
  }
}

export default Playground;
