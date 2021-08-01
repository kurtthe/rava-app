import { UPLOAD_VIDEO } from './types';

const INITIAL_STATE = {
  videosUpload: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UPLOAD_VIDEO:
      return { ...state, timers: action.payload };

    default:
      return state;
  }
};
