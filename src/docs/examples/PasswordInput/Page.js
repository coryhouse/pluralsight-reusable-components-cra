import React, {PropTypes} from 'react';
import Example from '../../Example';
import ComponentPage from '../../ComponentPage';
import ExampleAllFeatures from './ExampleAllFeatures';
import ExampleAllFeaturesCode from '!raw-loader!./ExampleAllFeatures';
import ExampleJustToggleVisibility from './ExampleJustToggleVisibility';
import ExampleJustToggleVisibilityCode from '!raw-loader!./ExampleJustToggleVisibility';

const PasswordInputPage = ({name, code}) => {
  return (
    <ComponentPage
      name={name}
      code={code}
      examples={[
        <Example key="ExampleAllFeatures" code={ExampleAllFeaturesCode}><ExampleAllFeatures /></Example>,
        <Example key="ExampleJustToggleVisibility" code={ExampleJustToggleVisibilityCode}><ExampleJustToggleVisibility /></Example>
      ]} />
  )
};

React.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

export default PasswordInputPage;
