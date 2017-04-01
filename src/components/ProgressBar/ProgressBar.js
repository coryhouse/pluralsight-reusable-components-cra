import React, { PropTypes } from 'react';

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
      <div style={{border: 'solid 1px lightgray', width: width}}>
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
  percent: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number
};

export default ProgressBar;
