export interface Timer {
  minutoInit:string;
  duration: string;
  repeat: string;
  end:boolean;
}

export interface Timers {
  timers: Timer[];
}

export interface StateStoreTimers{
  timers: Timer[];
}