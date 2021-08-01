import { UPLOAD_VIDEO} from './types'

export const uploadVideo = (urlVideo:Array<File>) => (dispatch:any)  => {
	dispatch({
		type: UPLOAD_VIDEO,
		payload: urlVideo,
	});

	return urlVideo;
};
