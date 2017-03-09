import React from 'react';
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
    // Dynamically require page. Must use require here
    // since ES imports do not support dynamic importing.
    const Page = require('./examples/' + this.state.page + '/Page').default;
    return <Page />;
  }

  render() {
    return (
      <div>
        <Title render="Pluralsight UI" />
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
