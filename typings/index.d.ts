import {Observable} from 'rxjs'
import * as request from 'request'

interface Response {
  resp: request.RequestResponse
  body: any
}

export interface CreateRequestObservable {
  (options: request.OptionsWithUrl | request.OptionsWithUri) : Observable<Response>
}

declare function createRequestObservable (options: request.OptionsWithUrl | request.OptionsWithUri): Observable<Response>
