import React from 'react';
import ProgressBarPage from './examples/ProgressBar/Page';
import PasswordInputPage from './examples/PasswordInput/Page';
import TextInputPage from './examples/TextInput/Page';
import RegistrationFormPage from './examples/RegistrationForm/Page';
import Title from 'react-title-component';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'ProgressBar',
      pages: [
        'ProgressBar',
        'PasswordInput',
        'TextInput',
        'RegistrationForm'
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
      case 'RegistrationForm':
        return <RegistrationFormPage/>;
      default:
        throw new Error('Unknown page ' + this.state.page);
    }
  }

  render() {
    return (
      <div>
        <Title="Pluralsight UI" />
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

        <div className="clear"></div>
      </div>
    )
  }
}
