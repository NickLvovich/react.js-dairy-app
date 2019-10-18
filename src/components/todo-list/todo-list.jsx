import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ storiesList, removeStory, storyCounter}) => (
  <ul className="todo-list">
    {storiesList.map(({ id, text}) => (
      <ToDoItem 
      removeStory={removeStory} 
      id={id} 
      key={id} 
      text={text}
      storyCounter={storyCounter}
      />
    ))}
  </ul>
);

ToDoList.propTypes = {
  storiesList: PropTypes.array,
  removeStory: PropTypes.func,
  storyCounter: PropTypes.number,
}

ToDoList.defaultProps = {
  storiesList: [],
  removeStory: () => {},
  storyCounter: 0,
}

export default ToDoList;
