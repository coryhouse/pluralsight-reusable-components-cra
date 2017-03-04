import React from 'react';
import Example from '../../Example';
import ComponentPage from '../../ComponentPage';
import code from '!raw-loader!ps-ui/TextInput/TextInput';
import ExampleRequired from './ExampleRequired';
import ExampleRequiredCode from '!raw-loader!./ExampleRequired';

const TextInputPage = () => {
  return (
    <ComponentPage
      name="ExampleRequired"
      code={code}
      examples={[
        <Example key="ExampleRequired" code={ExampleRequiredCode}><ExampleRequired /></Example>
      ]} />
  )
};

export default TextInputPage;
