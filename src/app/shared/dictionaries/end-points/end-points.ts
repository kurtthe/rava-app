import {environment} from '@env';

export const endPoints = {
  auth: `${environment.api}auth`,
  uploadFile: `${environment.api}upload`,
  renderShotstack: `${environment.apiShotstack}render`,
  getRenderShotstack: `${environment.apiShotstack}render/:code`
}
