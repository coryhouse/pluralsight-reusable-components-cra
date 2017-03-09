import React, {PropTypes} from 'react';
import Example from '../../Example';
import ComponentPage from '../../ComponentPage';
import ExampleRequired from './ExampleRequired';
import ExampleRequiredCode from '!raw-loader!./ExampleRequired';

const TextInputPage = ({name, code}) => {
  return (
    <ComponentPage
      name={name}
      code={code}
      examples={[
        <Example
          key="ExampleRequired"
          code={ExampleRequiredCode}>
          <ExampleRequired />
        </Example>
      ]} />
  )
};

React.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

export default TextInputPage;
