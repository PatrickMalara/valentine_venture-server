const app = require('../../src/app');

describe('\'saved_locations\' service', () => {
  it('registered the service', () => {
    const service = app.service('saved-locations');
    expect(service).toBeTruthy();
  });
});
