import { combineReducers } from 'redux';

import {reducer as form} from 'redux-form';
import posts from './postsReducer';

const rootReducer = combineReducers({ // ability to type within search bar and will display query url
  form,
  posts // used as a reducer and obtain data
});

export default rootReducer;