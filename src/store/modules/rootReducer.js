import { combineReducers } from 'redux';

import auth from './auth/reducer';
import store from './store/reducer';

export default combineReducers({ auth, store });
