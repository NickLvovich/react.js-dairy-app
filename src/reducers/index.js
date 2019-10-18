import {combineReducers} from 'redux';
import stories from './stories';
import comments from './comments';

const rootReducers = combineReducers({ stories, comments })

export default rootReducers
