export interface Props {
  src: string;
  OnProgress: (progress:ProgressVideo)=> void
}

export interface ProgressVideo {
  playedSeconds: any,
  played: any,
  loadedSeconds: any,
  loaded: number
}
