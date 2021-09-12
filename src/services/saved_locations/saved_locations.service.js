// Initializes the `saved_locations` service on path `/saved-locations`
const { SavedLocations } = require('./saved_locations.class');
const createModel = require('../../models/saved_locations.model');
const hooks = require('./saved_locations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/saved-locations', new SavedLocations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('saved-locations');

  service.hooks(hooks);
};
