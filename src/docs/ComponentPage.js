import React, {PropTypes} from 'react';
import Example from './Example';
import Props from './Props';
import Title from 'react-title-component';

const ComponentPage = ({component}) => {
  const {name, description, props, examples} = component;

  return (
    <div id="page-wrapper">
      <Title render={previousTitle => `${previousTitle} - ${name}`} />
      <h2>{name}</h2>
      <p>{description}</p>

      <h3>Examples</h3>
      {
        examples.map( example => <Example key={example.name} example={example} /> )
      }

      <h3>Props</h3>
      {
        props ? <Props props={props} /> : "This component accepts no props."
      }
    </div>
  )
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
