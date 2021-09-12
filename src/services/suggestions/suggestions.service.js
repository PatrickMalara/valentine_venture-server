// Initializes the `suggestions` service on path `/suggestions`
const { Suggestions } = require('./suggestions.class');
const createModel = require('../../models/suggestions.model');
const hooks = require('./suggestions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/suggestions', new Suggestions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('suggestions');

  service.hooks(hooks);
};
