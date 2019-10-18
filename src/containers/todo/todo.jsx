import React, { Component } from 'react';
import {connect} from 'react-redux';

import {addStory, removeStory, addComment} from '../../actions/actionCreator'

import CommentList from '../../components/comment-list/comment-list'
import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';
import CommentInput from '../../components/comment-input/comment-input';

import './todo.css';


class ToDo extends Component {

  state = {
    storyText: '',
    commentText: ''
  }

  
  handleCommentInputChange = ({target: {value} }) => {
    this.setState({
      commentText: value,
    })
  }

  handleInputChange = ({target: {value} }) => {
    this.setState({
      storyText: value,
    })
  }

  addCommentOnKeyPress = ({ key }) => {
    const { commentText } = this.state;

    if (commentText.length > 1 && key === 'Enter') {
      const {addComment} = this.props;

      addComment((new Date()).getTime(), commentText, false);

      this.setState({
        commentText: '',
      })
    }
  } 

  addCommentOnClick = ({ e }) => {
    const { commentText } = this.state;

    if (commentText.length > 1 && e) {
      const {addComment} = this.props;

      addComment((new Date()).getTime(), commentText, false);

      this.setState({
        commentText: '',
      })
    }
  }
  addStoryOnKeyPress = ({ key }) => {
    const { storyText } = this.state;

    if (storyText.length > 1 && key === 'Enter') {
      const {addStory} = this.props;

      addStory((new Date()).getTime(), storyText, false);

      this.setState({
        storyText: '',
      })
    }
  } 

  addStoryOnClick = (e) => {
    const { storyText } = this.state;

    if (storyText.length > 1 && e) {
      const {addStory} = this.props;

      addStory((new Date()).getTime(), storyText, false);

      this.setState({
        storyText: '',
      })
    }
  }

  

  getActiveStoryCounter = stories => stories.filter(story => !story.isExist).length;

  render() {
    const { storyText, commentText } = this.state;
    const { stories, removeStory, title, comments} = this.props;
    const isStoriesExist = stories && stories.length > 0;
    const storyCounter = this.getActiveStoryCounter(stories);

    return (
      <div className="todo-comment-wrapper">
        <div className="block-wrapper">
          <h1>{title}</h1>
          <ToDoInput onClick={this.addStoryOnClick} onKeyPress={this.addStoryOnKeyPress} onChange={this.handleInputChange} value={storyText}/>
          {isStoriesExist && (<ToDoList storiesList={stories} removeStory={removeStory} storyCounter={storyCounter}/> )}
        </div>
        <div className="block-wrapper">
          {isStoriesExist && (<CommentList storiesList={stories} commentList={comments} /> )}
          {isStoriesExist &&<CommentInput onClick={this.addCommentOnClick} onKeyPress={this.addCommentOnKeyPress} onChange={this.handleCommentInputChange} value={commentText} />}
        </div>
      </div>
    );
  }
}

export default connect(({ stories, filters, comments }) => ({
  stories,
  filters,
  comments,
}), {addStory, removeStory, addComment})(ToDo);
