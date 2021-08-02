import {CREATE_TIMER} from './types'
import {Timer, StateStoreTimers} from '@shared/interfaces/timers.interface'
import {ActionsVideo} from '../interfaces/actions.interface'

const INITIAL_STATE:StateStoreTimers={
  timers: [],
}

export default (state=INITIAL_STATE, action:ActionsVideo)=>{

  switch(action.type){

    case CREATE_TIMER: 
			const newTimer:Timer = action.payload as Timer;
			const getTimers:Array<Timer> = state.timers;

      getTimers.push(newTimer);
      return {...state, timers: getTimers}

    default:
      return state
  }
  
}
