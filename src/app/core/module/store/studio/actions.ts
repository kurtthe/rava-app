import {RENDER_VIDEO, DURATION_VIDEO} from './types'

export const videoRender = (video:File) => async (dispatch:any) => {
	dispatch({
		type: RENDER_VIDEO,
		payload: video
	});
};

export const durationVideo = (duration:number) => async (dispatch:any) => {
	dispatch({
		type: DURATION_VIDEO,
		payload: duration
	});
};