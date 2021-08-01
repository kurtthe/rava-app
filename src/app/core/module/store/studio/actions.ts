import {RENDER_VIDEO} from './types'

export const videoRender = (video:File) => async (dispatch:any) => {
	dispatch({
		type: RENDER_VIDEO,
		payload: video
	});
};