import { UPLOAD_VIDEO} from './types'

export const uploadVideo = (urlVideo) => async (dispatch) => {
	dispatch({
		type: UPLOAD_VIDEO,
		payload: urlVideo,
	});

	return urlVideo;
};