import {CREATE_TIMER} from './types'

export const createTimer = (newTimer) => (dispatch) => {

	dispatch({
		type: CREATE_TIMER,
		payload: newTimer,
	});
};