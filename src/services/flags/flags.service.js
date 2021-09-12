// Initializes the `flags` service on path `/flags`
const { Flags } = require('./flags.class');
const createModel = require('../../models/flags.model');
const hooks = require('./flags.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/flags', new Flags(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('flags');

  service.hooks(hooks);
};
