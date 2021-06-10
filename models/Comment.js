const { truncate } = require('fs');
const {Model, Datatypes } = require('sequelize');
const sequlize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
    }
)

module.export = Comment