const { Comment, Post, GroupUser } = require('../models');
const { Op } = require('sequelize');
const Sq = require('sequelize');
const Sequelize = Sq.Sequelize;

class CommentRepository extends Post {
  constructor() {
    super();
  }
}
