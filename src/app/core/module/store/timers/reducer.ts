import {CREATE_TIMER} from './types'

const INITIAL_STATE={
  timers: [],
}

export default (state=INITIAL_STATE, action:any)=>{

  switch(action.type){

    case CREATE_TIMER: 
			const newTimer = action.payload;
			const getTimers:Array<any> = state.timers;

      getTimers.push(newTimer);

      return {...state, timers: getTimers}

    default:
      return state
  }
  
}
