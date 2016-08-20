let Rx = require('rxjs/Rx')
let request = require('request')

module.exports = options => Rx.Observable.create(o => {
  request(options, (err, resp, body) => {
    if (err || resp.statusCode !== 200) {
      o.error(err || new Error(`Status code ${resp.statusCode}`))
    } else {
      o.next(body)
    }
    o.complete()
  })

  return () => null
})
