import {CREATE_TIMER, CHANGE_DURATION} from './types'
import {Timer} from '@shared/interfaces/timers.interface'

export const createTimer = (newTimer:Timer) => (dispatch:any) => {
	dispatch({
		type: CREATE_TIMER,
		payload: newTimer,
	});
};

export const changeDuration = (newTime:number) => (dispatch:any) => {
	dispatch({
		type: CHANGE_DURATION,
		payload: newTime,
	});
};
