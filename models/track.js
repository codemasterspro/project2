// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
  var Track = sequelize.define("Track", {
    track_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    track_artist: {
      type: DataTypes.STRING,
      allowNull: false
    },
    track_albumCover: {
      type: DataTypes.STRING,
      allowNull: false
    },
    track_artistImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    track_songPreview: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        models.Track.belongsTo(models.User);
      }
    }
  });
  return Track;
};
