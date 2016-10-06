let Rx = require('rxjs/Rx')
let test = require('ava')
let requestObservable = require('./')

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

test('Request that should fail', t => {
  t.throws(requestObservable({
    url: 'https://en.wikipedia.org/wiki/1231231231312'
  }))
})
