import React from 'react';
import PropTypes from 'prop-types';

import './todo-input.css';


const ToDoInput = ({ value, onChange, onKeyPress, onClick }) => (
  <div className="todo-input-wrapper">
    <input
      className="todo-input"
      placeholder="Type name here..."
      onChange={onChange}
      value={value}
      onKeyPress={onKeyPress}
    />
    <button onClick={onClick}>
      Add new
    </button>
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
  onClick: PropTypes.func
}

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  onClick: () => {},
  value: '',
}

export default ToDoInput;
