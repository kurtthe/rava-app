export class TransformDurationVideoService {
  public secondsToMinutes(seconds: number) {
    if (seconds > 60) {
      return `${(seconds / 60).toFixed(2)} minutes`;
    }
    return `${seconds.toFixed(0)} seconds`;
  }

  public minutesToSeconds(minutes: number) {
    if (minutes < 1) {
      return `${(minutes * 60).toFixed(2)} seconds`;
    }
    return `${minutes.toFixed(0)} minutes`;
  }

  public getLabelTime(time: number) {
    if (time > 60) {
      return 'Minutes';
    }

    return 'Seconds';
  }
}
