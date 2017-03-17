import React, { PropTypes } from 'react';
import styles from './ProgressBar.css';

/**
 * Display progress from 0% to 100%
 */
class ProgressBar extends React.Component {
  getBarColor = () => {
    if (this.props.percent === 100) {
      return 'green';
    } else if (this.props.percent > 50) {
      return 'lightgreen';
    }
    return 'red';
  }

  render() {
    return (
      <div className={styles.container}>
        <div style={{
          width: this.props.percent,
          height: 5,
          backgroundColor: this.getBarColor()
        }} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  /**
   * Number from 0 and 100 that represents progress.
   */
  percent: PropTypes.number.isRequired
};

export default ProgressBar;
