// Initializes the `locations` service on path `/locations`
const { Locations } = require('./locations.class');
const createModel = require('../../models/locations.model');
const hooks = require('./locations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: {
        max: 1000
    }  //@TODO: create an enpoint just for Chart Data Generation
  };

  // Initialize our service with any options it requires
  app.use('/locations', new Locations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('locations');

  service.hooks(hooks);
};
