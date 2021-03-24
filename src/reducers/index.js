import { combineReducers } from 'redux';

import {reducer as form} from 'redux-form';

const rootReducer = combineReducers({ // ability to type within search bar
  form
});

export default rootReducer;