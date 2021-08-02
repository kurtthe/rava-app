import { combineReducers } from 'redux';
import studioReducer from './studio/reducer'
import timerReducer from './timers/reducer'
import assetsReducer from './assets/reducer'

export default combineReducers({
  studioReducer,
  timerReducer,
  assetsReducer
});
