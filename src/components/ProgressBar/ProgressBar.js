import React from 'react';
import PropTypes from 'prop-types';
// import {getWidthAsPercentOfTotalWidth} from '../../utils/percentUtils';

/** Display progress between 0 and 100 percent on colorful horizontal bar. */
class ProgressBar extends React.Component {
  getColor = (percent) => {
    if (this.props.percent === 100) return 'green';
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  }

  // Show this when using Enzyme to unit test func
  getWidthAsPercentOfTotalWidth = () => {
    return parseInt(this.props.width * (this.props.percent / 100), 10);
  }

  render() {
    const {percent, width, height} = this.props;
    return (
      <div style={{border: 'solid 1px lightgray', width}}>
        <div style={{
          width: getWidthAsPercentOfTotalWidth(percent, width),
          height,
          backgroundColor: this.getColor(percent)
        }} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,

  /** Bar width */
  width: PropTypes.number.isRequired,

  /** Bar height */
  height: PropTypes.number
};

ProgressBar.defaultProps = {
  height: 5
};

export default ProgressBar;
