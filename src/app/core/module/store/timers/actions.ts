import {CREATE_TIMER} from './types'
import {Timer} from '@shared/interfaces/timers.interface'

export const createTimer = (newTimer:Timer) => (dispatch:any) => {
	dispatch({
		type: CREATE_TIMER,
		payload: newTimer,
	});
};