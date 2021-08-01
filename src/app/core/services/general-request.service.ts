import axios from 'axios'
import { from  } from 'rxjs';
import { first, retry } from 'rxjs/operators';
import {environment } from '@env'


export class GeneralRequest {
  private readonly http;
  constructor(){
    this.http = axios
  }

  public post(endPoints:string, data:unknown) {
    return from(this.http.post(endPoints, data, {headers:{'Access-Control-Allow-Origin': '*', 'x-api-key': environment.apiKeyShot}})).
      pipe(
      retry(1),
      first()
    );
  }

  public get(url:string, options:unknown) {
    return from(this.http.get(url)).
    pipe(
    retry(1),
    first()
  );
  }
}

