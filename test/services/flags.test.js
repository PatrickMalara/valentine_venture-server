const app = require('../../src/app');

describe('\'flags\' service', () => {
  it('registered the service', () => {
    const service = app.service('flags');
    expect(service).toBeTruthy();
  });
});
