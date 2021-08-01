import { BodyShotStack, Clips } from '@shared/interfaces/body-shotstack.interface';

export class ShotStackService {
  private body: BodyShotStack;

  constructor() {
    this.body = this.generateBodyInit();
  }

  private generateBodyInit(): BodyShotStack {
    return {
      timeline:{
        background: '#000000',
        cache: true,
        disk: 'local',
        tracks:[{clips:[]}],
        output:{
          format: 'mp4',
          resolution: 'hd',
          aspectRatio: '16:9',
          fps: 25,
          scaleTo: 'hd',
          quality: 'medium',
        }
      }
    };
  }

  public addVideos(videos:Array<File>) {
    if (videos.length === 0) {
      return;
    }
    const getClips:Array<Clips> = this.body.timeline.tracks[0].clips

    videos.forEach((video)=>{
      const videoAdd:string = URL.createObjectURL(video); 

      const dataVideo:Clips = {
        asset:{
          src: videoAdd,
          type: 'video',
          volume:1
        },
        start:0,
        length:10,
        fit: 'contain',
        opacity: 1,
        effect: 'zoomIn',
        filter : 'muted'
      }

      getClips.push(dataVideo)
    })

    this.body.timeline.tracks[0].clips = getClips

    return this.body

  }
}
