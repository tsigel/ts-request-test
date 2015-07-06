/// <reference path="./../typings/tsd.d.ts" />

import XMLHttpRequest = require('../src/index');

XMLHttpRequest.config({
    'some/test/url': {
        types: ['GET']
    }
});

describe('XMLHttpRequest', () => {

    it('200', (done) => {
        var xnr = new XMLHttpRequest();
        xnr.open('GET', 'some/test/url', true);
        xnr.send();
        xnr.onreadystatechange = () => {
            if (xnr.readyState != 4) {
                return null;
            }
            expect(xnr.status).to.be(200);
            done();
        };
    });

    it('404', (done) => {
        var xnr = new XMLHttpRequest();
        xnr.open('GET', 'some', true);
        xnr.send();
        xnr.onreadystatechange = () => {
            if (xnr.readyState != 4) {
                return null;
            }
            expect(xnr.status).to.be(404);
            done();
        };
    });

    it('toDebug', (done) => {

        var xnr = new XMLHttpRequest();
        XMLHttpRequest.toDebug((xhr) => {
            if (xhr.readyState == 4) {
                expect(xhr.url).to.be('some');
                done();
            }
        });
        xnr.open('GET', 'some', true);
        xnr.send();

    });

});