import {RENDER_VIDEO} from './types'

export const uploadVideo = (urlVideo) => async (dispatch) => {
	dispatch({
		type: RENDER_VIDEO,
		payload: urlVideo,
	});
};