const app = require('../../src/app');

describe('\'search_controller\' service', () => {
  it('registered the service', () => {
    const service = app.service('search-controller');
    expect(service).toBeTruthy();
  });
});
