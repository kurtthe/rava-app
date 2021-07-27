import axios from 'axios'
import {GenericResponse} from '@shared/interfaces/responses-http.interface'
import { Observable, from  } from 'rxjs';
import { first, retry } from 'rxjs/operators';



export class GeneralRequest {
  private readonly http;
  constructor(){
    this.http = axios
  }

  public post(endPoints:string, data:unknown):Observable<GenericResponse<any>> {
    return from(this.http.post(endPoints, data)).
      pipe(
      retry(1),
      first()
    );
  }

  public get(url:string, options:unknown):Observable<GenericResponse<any>> {
    return from(this.http.get(url)).
    pipe(
    retry(1),
    first()
  );
  }
}

