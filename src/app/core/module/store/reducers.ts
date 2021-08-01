import { combineReducers } from 'redux';
import StudioReducer from './studio/reducer'
import TimerReducer from './timers/reducer'
import AssetsReducer from './assets/reducer'

export default combineReducers({
  StudioReducer,
  TimerReducer,
  AssetsReducer
});
