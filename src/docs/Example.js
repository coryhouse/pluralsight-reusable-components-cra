import React, {PropTypes} from 'react';
import {parse} from 'react-docgen';
import Highlight from 'react-highlight';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCode: false
    };
  }

  toggleCode(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  render() {
    const {children, code} = this.props;
    const {showCode} = this.state;
    const info = parse(code);
    return (
      <div className="example-wrapper">
        <h4>
          {info.description}
        </h4>

        {children}

        <p>
          <a href="#" onClick={this.toggleCode.bind(this)}>
            {showCode ? "Hide" : "Show"} Code
          </a>
        </p>

        {showCode && <Highlight className="javascript">{code}</Highlight>}
      </div>
    )
  }
}

Example.propTypes = {
  code: PropTypes.string.isRequired
}

export default Example;
