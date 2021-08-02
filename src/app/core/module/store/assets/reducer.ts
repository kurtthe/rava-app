import { UPLOAD_VIDEO } from './types';
import {ActionsVideo} from '../interfaces/actions.interface'
import {AssetsState} from '../interfaces/assets.interface'

const INITIAL_STATE:AssetsState = {
  videosUpload: [],
};

export default (state = INITIAL_STATE, action: ActionsVideo) => {
  switch (action.type) {
    case UPLOAD_VIDEO:
      return { ...state, timers: action.payload };

    default:
      return state;
  }
};
