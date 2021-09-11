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
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cover_img_url: {
        type: DataTypes.STRING,
        allowNull: true
    },
    latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    main_category_id: {
        type: DataTypes.INTEGER,
        allowNull: true
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
