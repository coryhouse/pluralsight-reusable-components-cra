import React, {PropTypes} from 'react';
import Example from '../../Example';
import ComponentPage from '../../ComponentPage';
import Example10Percent from './Example10Percent';
import Example10PercentCode from '!raw-loader!./Example10Percent';
import Example70Percent from './Example70Percent';
import Example70PercentCode from '!raw-loader!./Example70Percent';
import Example100Percent from './Example100Percent';
import Example100PercentCode from '!raw-loader!./Example100Percent';

const ProgressBarPage = ({name, code}) => {
  return (
    <ComponentPage
      name={name}
      code={code}
      examples={[
        <Example key="Example10Percent" code={Example10PercentCode}><Example10Percent /></Example>,
        <Example key="Example70Percent" code={Example70PercentCode}><Example70Percent /></Example>,
        <Example key="Example100Percent" code={Example100PercentCode}><Example100Percent /></Example>
      ]} />
  )
};

React.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};

export default ProgressBarPage;
