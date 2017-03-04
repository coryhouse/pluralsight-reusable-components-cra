import React from 'react';
import ProgressBarPage from './examples/ProgressBar/Page';
import PasswordInputPage from './examples/PasswordInput/Page';
import TextInput from './examples/TextInput/Page';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        return <TextInput/>;
      default:
        throw('Unknown page ' + this.state.page);
    }
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
        </div>

        <div style={{clear:'both'}}></div>
      </div>
    )
  }
}
