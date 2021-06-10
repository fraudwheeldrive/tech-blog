const {Model, Datatypes } = require('sequelize');
const sequlize = require('../config/connection');

class User extends Model {}

User.init()

module.export = User