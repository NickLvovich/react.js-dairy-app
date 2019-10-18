import React from 'react';
import PropTypes from 'prop-types';

import './title.css';

const Title = ({ title, tagline }) => (
  <div className="title">
    <h1 >{title}</h1>
    <h2 className="tagline">{tagline}</h2>
  </div>
);

Title.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
}

Title.defaultProps = {
  title: 'Simple title',
  tagline: '',
}

export default Title;
