// Initializes the `location_category_links` service on path `/location-category-links`
const { LocationCategoryLinks } = require('./location_category_links.class');
const createModel = require('../../models/location_category_links.model');
const hooks = require('./location_category_links.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/location-category-links', new LocationCategoryLinks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('location-category-links');

  service.hooks(hooks);
};
