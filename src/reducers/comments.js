import { ADD_COMMENT, COMPLETE_COMMENT } from "../constants";
import { load } from 'redux-localstorage-simple';

let COMMENTS = load({ namespace1: 'comment-list'});

if(!COMMENTS || !COMMENTS.comments || !COMMENTS.comments.length){
  COMMENTS = {
    comments: [],
  }
}

const comments = (state = COMMENTS.comments, { id, text, isExist, type }) => {
  switch (type) {
    case ADD_COMMENT:
      return [
        ...state, {
          id,
          text,
          isExist
        }
      ];
      case COMPLETE_COMMENT: 
      return [...state].map(comment => {
        if(comment.id === id) {
          comment.isExist = !comment.isExist;
        }
        return comment;
      })
    default:
      return state;
  }
}

export default comments;