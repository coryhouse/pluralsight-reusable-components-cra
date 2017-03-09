import React, {PropTypes} from 'react';
import Example from '../../Example';
import ComponentPage from '../../ComponentPage';
import ExampleRegistrationForm from './ExampleRegistrationForm';
import ExampleRegistrationFormCode from '!raw-loader!./ExampleRegistrationForm';

const RegistrationFormPage = ({name, code}) => {
  return (
    <ComponentPage
      name={name}
      code={code}
      examples={[
        <Example key="ExampleForm" code={ExampleRegistrationFormCode}><ExampleRegistrationForm /></Example>
      ]} />
  )
};

React.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

export default RegistrationFormPage;
