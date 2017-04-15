import React from 'react';
import PropTypes from 'prop-types';

/** Display progress between 0 and 100 percent on colorful horizontal bar. */
class ProgressBar extends React.Component {
  static defaultProps = {
    height: 5
  };

  getColor = (percent) => {
    if (this.props.percent === 100) return 'green';
    return this.props.percent > 50 ? 'lightgreen' : 'red';
  }

  getProgressWidth = (width, percent) => {
    return parseInt(width * (percent / 100), 10);
  }

  render() {
    const {percent, width, height} = this.props;
    return (
      <div style={{border: 'solid 1px lightgray', width}}>
        <div style={{
          width: this.getProgressWidth(width, percent),
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

export default ProgressBar;
