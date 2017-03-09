import React from 'react';
import Title from 'react-title-component';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComponent: 'ProgressBar',
      components: [
        'ProgressBar',
        'PasswordInput',
        'TextInput',
        'RegistrationForm'
      ]
    };
  }

  setPage(event, arg) {
    event.preventDefault();
    this.setState({currentComponent: arg.page});
  }

  getPage() {
    // Dynamically require page. Must use require here
    // since ES imports do not support dynamic importing.
    const {currentComponent} = this.state;
    const Page = require('./examples/' + currentComponent + '/Page').default;
    const code = require('!raw-loader!ps-ui/' + currentComponent + '/' + currentComponent);
    return <Page name={currentComponent} code={code} />;
  }

  render() {
    return (
      <div>
        <Title render="Pluralsight UI" />
        <div id="navigation">
          <ul className="unstyled">
            {
              this.state.components.map( page => {
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
