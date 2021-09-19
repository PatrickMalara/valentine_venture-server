// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const flags = sequelizeClient.define('flags', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
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
  flags.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return flags;
};
