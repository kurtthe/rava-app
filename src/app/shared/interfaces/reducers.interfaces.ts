import StudioReducer from '@core/module/studio/reducer';
import TimerReducer from '@core/module/timers/reducer';
import AssetsReducer from '@core/module/assets/reducer';

export interface Reducers {
  studioReducer: StudioReducer;
  timerReducer: TimerReducer;
  assetsReducer: AssetsReducer;
}
