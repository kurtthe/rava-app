export interface Props{
  videosUpload:Array<File>;
  uploadVideo:(files:Array<File>)=>Array<File>;
  videoRender: (file:File)=>void
}

export interface State {
  videos:Array<File>;
}