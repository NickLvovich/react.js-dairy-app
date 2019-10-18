import {COMPLETE_STORY, ADD_STORY, REMOVE_STORY} from '../constants';
import { load } from 'redux-localstorage-simple';

let STORIES = load({ namespace: 'story-list'});

if(!STORIES || !STORIES.stories || !STORIES.stories.length){
  STORIES = {
    stories: [],
  }
}

const stories = (state = STORIES.stories, {id, text, isExist, type, comments}) => {
  switch (type) {
    case ADD_STORY :
      return [
        ...state, {
          id,
          text,
          isExist,
          comments
        }
      ];
    case REMOVE_STORY: 
    return [...state].filter(story => story.id !== id);
    case COMPLETE_STORY: 
    return [...state].map(story => {
      if(story.id === id) {
        story.isExist = !story.isExist;
      }
      return story;
    })
    default:
      return state;
  } 
}

export default stories