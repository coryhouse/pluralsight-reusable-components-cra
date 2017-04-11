import React from 'react';
import Title from './Title';
import Navigation from './Navigation';
import ComponentPage from './ComponentPage';
import componentData from '../../config/componentData';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    const {route} = this.state;
    const component = route ? componentData.find( component => component.name === route) : componentData[0];

    return (
      <div>
        <Title render="Pluralsight UI" />
        <Navigation components={componentData.map(component => component.name)} />
        <ComponentPage component={component} />
      </div>
    )
  }
}
