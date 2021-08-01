import {RENDER_VIDEO} from './types'

const INITIAL_STATE={
  video: '',
}

export default (state=INITIAL_STATE, action:any)=>{

  switch(action.type){

    case RENDER_VIDEO: 
      return {...state, video: action.payload}

    default:
      return state
  }
  
}
