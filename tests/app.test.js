const app = require('../app');
const supertest = require('supertest');

describe('Make a request to demo image', () => {
    let request = supertest(app).get('/i/demo/75/600x400/kapadokya/balonlar.jpg');

    test('must be send image and respond with 200', (done) => {
        request.expect('Content-Type', 'image/jpg').expect(200, done);
    });
});