import React from 'react';
import PropTypes from 'prop-types';

import './comment-item.css';

const CommentItem = ({ text }) => (
  <li className="comment-item">
    <span>{text}</span>
  </li>
);

CommentItem.propTypes = {
  text: PropTypes.string,
  isExist: PropTypes.bool,
  removeStory: PropTypes.func,
  id: PropTypes.number
}

CommentItem.defaultProps = {
  text: '',
  isExist: false,
  removeStory: () => {},
  id: 0,
}

export default CommentItem;