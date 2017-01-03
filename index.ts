import {Observable} from 'rxjs'
import * as request from 'request'

import {CreateRequestObservable} from './typings/index.d'

export const createRequestObservable: CreateRequestObservable = (options) => {
  return Observable.create((o) => {
    request(options, (err, resp, body) => {
      if (err) {
        o.error(err)
      } else {
        o.next({ resp, body })
      }
      o.complete()
    })
  })
}
