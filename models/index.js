const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

//3.5 step ONE create associations that a user can belong to many Posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//3.5 step TWO the constraint is that a post can belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

//add the model associations
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };