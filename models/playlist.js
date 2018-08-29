//Use the sequelize constructor to design a model for each new playlist and create SQL data 
module.exports = function(sequelize, DataTypes) {

    var Playlist = sequelize.define("Playlist", {
        playlist_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        playlist_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: { args: [1,50], msg: "String length is not in range" }
            }
        },
        createdAt: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
        updatedAt: {
            type: DataTypes.DATE(3), 
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        }
    },
    {
        tableName: 'Playlists'
    });

    Playlist.bulkCreate([
        {
            playlist_id: default, 
            playlist_name: "First Playlist", 
            createdAt: default, 
            updatedAt: default
        }, {
            playlist_id: default, 
            playlist_name: "Second Playlist", 
            createdAt: default, 
            updatedAt: default
        }
    ]).then(() => {
            return Playlist.findAll();
    }).then(playlists => {
        console.log(playlists);
    });

    return Playlist;
  };