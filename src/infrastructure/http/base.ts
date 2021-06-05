import axios from 'axios'

import { urlServicer } from './interface.url'
import UrlsServices from './urlsServices'

import Alert from '../shared/module/Alert'


const urlsServices: Array<urlServicer> = UrlsServices

class Base {
  public urls: Array<urlServicer>

  constructor() {
    this.urls = urlsServices
  }

  protected getUrlService(nameService: string) {
    const urlService = this.urls.filter((item) => item.name == nameService)

    return urlService[0]
  }

  public async authentication(credentials: string) {
    return new Promise((resolve, reject) => {
      const urlService: urlServicer = this.getUrlService('auth')

      axios.post(urlService.url, null, {
        headers: {
          'Authorization': `Basic ${credentials}`
        },
      })
        .then(() => {
          Alert(
            'Nos encanta tenerte de vuelta.',
            'success',
            'Bienvenido!',
          )
          resolve('')
        })
        .catch(({ response: { data } }) => {
          console.log("==>unatujdkfj=>",data)
          
          Alert(
            `${data.message}`,
            'error'
          )
          reject(data.message)
        })

    })
  }

  private validToken(token: any) {

    if (!token) {
      Alert(
        'Su sessión ha expirado.',
        'error'
      )
      return false
    }
    return true
  }

  public async post({ url }: any, token: any, data: any,) {
    return new Promise(async (resolve, reject) => {

      const tokenValid = this.validToken(token)
      if (!tokenValid) {
        return
      }

      axios.post(url, data, {
        headers: {
          'Authorization': `Basic ${token}`
        },
      })
        .then(({ data }) => {
          Alert(
            'Se creo correctamente',
            'success'
          )
          resolve(data)
        })
        .catch(({ response: { data } }) => {

          Alert(
            `${data.message}`,
            'error'
          )
          reject(data.message)
        })
    })
  }

  public get({ url }: any, token: string, params = {}) {

    return new Promise(async (resolve, reject) => {
      const tokenValid = this.validToken(token)
      if (!tokenValid) {
        return
      }

      axios(url, {
        method: 'GET',
        params: params,
        headers: {
          'Authorization': `Basic ${token}`
        },

      })
        .then(({ data }) => {
          resolve(data)
        })
        .catch(({ response: { data } }) => {
          Alert(
            `${data.message}`,
            'error'
          )
          reject(data.message)
        })
    })
  }


  public async put(data: any) {

  }

  public async delete(data: any) {

  }
}

export default Base
