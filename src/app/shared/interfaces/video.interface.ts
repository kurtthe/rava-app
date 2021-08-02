export interface Props {
  src: string;
  OnProgress: (progress: ProgressVideo) => void;
  durationVideo: (seconds: number) => void;
}

export interface ProgressVideo {
  playedSeconds: any;
  played: any;
  loadedSeconds: any;
  loaded: number;
}
