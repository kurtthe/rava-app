import { combineReducers } from 'redux';
import StudioReducer from './studio/reducer'
import TimerReducer from './timers/reducer'

export default combineReducers({
  StudioReducer,
  TimerReducer
});
