import React, {PropTypes} from 'react';
import Highlight from 'react-highlight';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  toggleCode(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  render() {
    const {showCode} = this.state;
    const {componentName} = this.props;
    const {code, description, name} = this.props.example;
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${componentName}/${name}`).default;
    return (
      <div className="example-wrapper">
        {description && <h4>{description}</h4> }

        <ExampleComponent />

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
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example;
