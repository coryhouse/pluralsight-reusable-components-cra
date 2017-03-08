import React from 'react';
import Example from '../../Example';
import ComponentPage from '../../ComponentPage';
import code from '!raw-loader!ps-ui/RegistrationForm/RegistrationForm';
import ExampleRegistrationForm from './ExampleRegistrationForm';
import ExampleRegistrationFormCode from '!raw-loader!./ExampleRegistrationForm';

const RegistrationFormPage = () => {
  return (
    <ComponentPage
      name="RegistrationForm"
      code={code}
      examples={[
        <Example key="ExampleForm" code={ExampleRegistrationFormCode}><ExampleRegistrationForm /></Example>
      ]} />
  )
};

export default RegistrationFormPage;
