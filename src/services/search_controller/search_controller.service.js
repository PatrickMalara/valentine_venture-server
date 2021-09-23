// Initializes the `search_controller` service on path `/search-controller`
const { SearchController } = require('./search_controller.class');
const hooks = require('./search_controller.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/search-controller', new SearchController(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('search-controller');

  service.hooks(hooks);
};
