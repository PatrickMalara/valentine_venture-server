const users = require('./users/users.service.js');
const locations = require('./locations/locations.service.js');
const savedLocations = require('./saved_locations/saved_locations.service.js');
const categories = require('./categories/categories.service.js');
const locationCategoryLinks = require('./location_category_links/location_category_links.service.js');
const ratings = require('./ratings/ratings.service.js');
const comments = require('./comments/comments.service.js');
const flags = require('./flags/flags.service.js');
const suggestions = require('./suggestions/suggestions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(locations);
  app.configure(savedLocations);
  app.configure(categories);
  app.configure(locationCategoryLinks);
  app.configure(ratings);
  app.configure(comments);
  app.configure(flags);
  app.configure(suggestions);
};
