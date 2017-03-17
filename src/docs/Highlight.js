import React, {PropTypes} from 'react';
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'

// This way is easy, but adds 170K gzipped to bundle since all langs are included.
// import Highlight from 'react-highlight';

class Highlight extends React.Component {
  componentDidMount() {
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightBlock(this.element);
  }

  render() {
    return (
      <pre ref={ref => { this.element = ref }}>
        <code>
          {this.props.children}
        </code>
      </pre>
    )
  }
}

Highlight.propTypes = {
  children: PropTypes.string.isRequired
}

export default Highlight;
