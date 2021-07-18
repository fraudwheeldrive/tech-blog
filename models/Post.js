const {Model, Datatypes } = require('sequelize');
const sequlize = require('../config/connection');

class Post extends Model {}

Post.init()

module.export = Post;