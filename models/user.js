module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        models.User.hasMany(models.Track);
      }
    }
  });
  return User;
};
