const app = require('../../src/app');

describe('\'location_category_links\' service', () => {
  it('registered the service', () => {
    const service = app.service('location-category-links');
    expect(service).toBeTruthy();
  });
});
