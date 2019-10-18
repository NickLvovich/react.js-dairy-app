import { ADD_STORY, REMOVE_STORY, ADD_COMMENT, } from '../constants'

export const addStory = (id, text, isExist) => ({
  type: ADD_STORY,
  id,
  text,
  isExist
});

export const removeStory = id => ({
  type: REMOVE_STORY,
  id,
});

export const addComment = (id, text, isExist) => ({
  type: ADD_COMMENT,
  id,
  text,
  isExist
});
// Разобраться с кодом касаемо добавления комментария, потому что я ещё не понял, каким образом всё это добавлять