"use strict";
const rxjs_1 = require("rxjs");
const request = require("request");
exports.createRequestObservable = (options) => {
    return rxjs_1.Observable.create((o) => {
        request(options, (err, resp, body) => {
            if (err) {
                o.error(err);
            }
            else {
                o.next({ resp, body });
            }
            o.complete();
        });
    });
};
