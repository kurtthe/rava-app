export interface BodyShotStack {
  timeline: {
    background: string;
    tracks: Array<Tracks>;
    cache: boolean;
    output: Output;
    disk: 'local';
    soundtrack?: Soundtrack;
  };
}

export interface Tracks {
  clips: Clips[];
}

interface Output {
  format: 'mp4' | 'gif' | 'jpg' | 'png' | 'bmp' | 'mp3';
  resolution: 'preview' | 'mobile' | 'sd' | 'hd' | '1080';
  aspectRatio: '16:9' | '9:16' | '1:1' | '4:5' | '4:3';
  fps: 12 | 15 | 24 |25 |30 ;
  scaleTo: 'preview' | 'mobile' | 'sd' | 'hd' | '1080';
  quality: 'low' | 'medium' | 'high'
  range?: {
    start: number;
    length: number;
  };
  poster?: {
    capture: number;
  };
  thumbnail?: {
    capture: number;
    scale: number;
  };
}

interface Soundtrack {
  src: string;
  effect: string;
  volume: number;
}

export interface Clips {
  asset: {
    type: 'video' | 'image';
    src: string;
    trim?: number;
    volume?: number;
    crop?: Crop;
  };
  start: number;
  length: number;
  fit: 'cover' | 'contain' | 'crop' | 'none';
  scale?: number;
  position?: 'top' | 'topRight' | 'right' | 'bottomRight' | 'bottom' | 'bottomLeft' | 'left '| 'topLeft' | 'center';
  offset?: Offset;
  transition?: Transition;
  effect?: 'zoomIn' |'zoomOut' |'slideLeft' |'slideRight' |'slideUp' |'slideDown';
  filter?: 'boost' | 'contrast' | 'darken' | 'greyscale' | 'lighten' | 'muted' | 'invert';
  opacity?: 1 | 0;
}
interface Crop {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface Offset {
  x?: number;
  y?: number;
}

interface Transition {
  in: 'fade' |'reveal' |'wipeLeft' |'wipeRight' |'slideLeft' |'slideRight' |'slideUp' |'slideDown' |'carouselLeft' |'carouselRight' |'carouselUp' |'carouselDown' |'shuffleTopRight' |'shuffleRightTop' |'shuffleRightBottom' |'shuffleBottomRight' |'shuffleBottomLeft' |'shuffleLeftBottom' |'shuffleLeftTop' |'shuffleTopLeft' |'zoom';
  out: 'fade' |'reveal' |'wipeLeft' |'wipeRight' |'slideLeft' |'slideRight' |'slideUp' |'slideDown' |'carouselLeft' |'carouselRight' |'carouselUp' |'carouselDown' |'shuffleTopRight' |'shuffleRightTop' |'shuffleRightBottom' |'shuffleBottomRight' |'shuffleBottomLeft' |'shuffleLeftBottom' |'shuffleLeftTop' |'shuffleTopLeft' |'zoom';
}


