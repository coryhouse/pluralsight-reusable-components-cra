import React from 'react';
import Title from 'react-title-component';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from './componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Default to the first component in the array.
      currentComponent: componentData[0]
    };
  }

  setPage = (event, index) => {
    event.preventDefault();
    this.setState({currentComponent: componentData[index]});
  }

  render() {
    const {currentComponent} = this.state;
    const components = componentData.map( component => component.name);

    return (
      <div>
        <Title render="Pluralsight UI" />
        <Navigation components={components} setPage={this.setPage}/>
        <ComponentPage component={currentComponent} />
        <div className="clear"></div>
      </div>
    )
  }
}
