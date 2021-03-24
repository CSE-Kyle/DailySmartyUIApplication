import { combineReducers } from 'redux';

import {reducer as form} from 'redux-form';
import posts from './postReducer';

const rootReducer = combineReducers({ // ability to type within search bar and will display query url
  form,
  posts
});

export default rootReducer;