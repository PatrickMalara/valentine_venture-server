// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const locationCategoryLinks = sequelizeClient.define('location_category_links', {
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    createdAt: "created_on",
    updatedAt: "updated_on"

  });

  // eslint-disable-next-line no-unused-vars
  locationCategoryLinks.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return locationCategoryLinks;
};
