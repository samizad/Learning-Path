import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
      </header>
    </div>
  );
};
Header.defaultProps = {
  title: 'Task Tracker'
};
Header.prototypes = {
  title: PropTypes.string.isRequired
};

export default Header;
