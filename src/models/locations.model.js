// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const locations = sequelizeClient.define('locations', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
        type: DataTypes.STRING,
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
  locations.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return locations;
};
