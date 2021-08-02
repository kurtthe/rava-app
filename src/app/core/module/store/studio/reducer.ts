import {RENDER_VIDEO, DURATION_VIDEO} from './types'
import {stateVideo} from '../interfaces/studio.interface'
import {ActionsVideo} from '../interfaces/actions.interface'

const INITIAL_STATE:stateVideo={
  video: '',
  duration: 0
}

export default (state:stateVideo=INITIAL_STATE, action:ActionsVideo)=>{

  switch(action.type){

    case RENDER_VIDEO: 
      return {...state, video: action.payload}

    case DURATION_VIDEO: 
      return {...state, duration: action.payload}

    default:
      return state
  }
  
}
