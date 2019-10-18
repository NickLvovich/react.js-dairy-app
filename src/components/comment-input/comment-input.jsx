import React from 'react';
import PropTypes from 'prop-types';

import '../todo-input/todo-input.css';

const CommentInput = ({ value, onChange, onKeyPress }) => (
  <div className="todo-input-wrapper">
    <input
      className="todo-input"
      placeholder="Comment here..."
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
  </div>
);

CommentInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

CommentInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}

export default CommentInput;