import React from 'react';
import PropTypes from 'prop-types';

import CommentItem from '../comment-item/comment-item';

import './comment-list.css';

const CommentList = ({ commentList}) => (
  <ul className="comment-list">
    {commentList.map(({ id, text}) => (
      <CommentItem 
      id={id} 
      key={id} 
      text={text}
      />
    ))}
  </ul>
);

CommentList.propTypes = {
  commentList: PropTypes.array,
}

CommentList.defaultProps = {
  commentList: [],
}

export default CommentList ;