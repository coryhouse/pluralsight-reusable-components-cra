import React from 'react';
import Title from 'react-title-component';
import componentData from './componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    console.log(componentData);
    this.state = {
      // Default to the first component in the array.
      currentComponent: componentData[0].name
    };
  }

  setPage(event, component) {
    event.preventDefault();
    this.setState({currentComponent: component});
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
              componentData.map( component => {
                const {name} = component;
                return (
                  <li key={name}>
                    <a href="#" onClick={(event) => this.setPage(event, name)}>
                      {name}
                    </a>
                  </li>
                )
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
