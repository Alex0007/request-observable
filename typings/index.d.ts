import {Observable} from 'rxjs'
import * as request from 'request'

interface Response {
  resp: request.RequestResponse
  body: any
}

export type RequestOptions = request.OptionsWithUrl | request.OptionsWithUri

export interface CreateRequestObservable {
  (options: RequestOptions) : Observable<Response>
}

declare function createRequestObservable (options: RequestOptions): Observable<Response>
