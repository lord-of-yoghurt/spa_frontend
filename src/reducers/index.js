import { combineReducers } from 'redux';

import postsReducer from './reducer_posts';

const rootReducer = combineReducers({
  postsReducer
});

export default rootReducer;
