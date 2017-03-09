import React, {PropTypes} from 'react';

const Navigation = ({components, setPage}) => {
  return (
    <ul id="navigation">
      {
        components.map( name => {
          return (
            <li key={name}>
              <a href="#" onClick={event => setPage(event, name)}>
                {name}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

React.propTypes = {
  components: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired
};

export default Navigation;
