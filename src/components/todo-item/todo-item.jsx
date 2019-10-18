import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text, removeStory, id, storyCounter, addComment}) => (
  <li className="todo-item">
    <span onClick={addComment}>{text} {storyCounter}</span>
    <button onClick={() => removeStory(id)} className="button-delete"> 
      delete
    </button>
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isExist: PropTypes.bool,
  removeStory: PropTypes.func,
  storyCounter: PropTypes.number,
  id: PropTypes.number
}

ToDoItem.defaultProps = {
  text: '',
  isExist: false,
  removeStory: () => {},
  id: 0,
  storyCounter: 0
}

export default ToDoItem;
