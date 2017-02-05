let Rx = require('rxjs/Rx')
let test = require('ava')
let requestObservable = require('./dist').createRequestObservable

test('Successful request', t => {
  t.plan(1)

  return requestObservable({
    url: 'http://echo.jsontest.com/thisThing/working'
  })
    .map(({body}) => JSON.parse(body))
    .do({
      next: (jsonOutput) => t.is(jsonOutput.thisThing, 'working'),
      error: t.fail
    })
})

test('Request that should return 404 statusCode', t => {
  t.plan(1)

  return requestObservable({
    url: 'https://en.wikipedia.org/wiki/1231231231312'
  }).do({
    next: ({resp}) => t.is(resp.statusCode, 404),
    error: t.fail
  })
})
