import React from 'react';
import ProgressBarPage from './examples/ProgressBar/Page';
import PasswordInputPage from './examples/PasswordInput/Page';
import TextInputPage from './examples/TextInput/Page';
import ExampleJustToggleVisibilityCode from '!raw-loader!./examples/PasswordInput/ExampleJustToggleVisibility';
import Playground from './Playground';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: ExampleJustToggleVisibilityCode,
      page: 'ProgressBar',
      pages: [
        'ProgressBar',
        'PasswordInput',
        'TextInput'
      ]
    };
  }

  setPage(event, arg) {
    event.preventDefault();
    this.setState({page: arg.page});
  }

  getPage() {
    switch(this.state.page) {
      case 'PasswordInput':
      case '': // default page
        return <PasswordInputPage />;
      case 'ProgressBar':
        return <ProgressBarPage/>;
      case 'TextInput':
        return <TextInputPage/>;
      default:
        throw new Error('Unknown page ' + this.state.page);
    }
  }

  updateCode = (code) => {
    this.setState({ code });
  }

  render() {
    return (
      <div>
        <div id="navigation">
          <ul className="unstyled">
            {
              this.state.pages.map( page => {
                return <li key={page}><a href="#" onClick={(event) => this.setPage(event, {page})}>{page}</a></li>
              })
            }
          </ul>
       </div>

        <div id="page-wrapper">
          {this.getPage()}

          {/*<CodeMirror value={this.state.code} onChange={this.updateCode} options={{lineNumbers: false, mode: 'javascript', autoSave: true}} />*/}
          <Playground ref="playground" />
        </div>

        <div className="clear"></div>
      </div>
    )
  }
}
