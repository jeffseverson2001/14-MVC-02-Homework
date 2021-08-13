const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');


User.hasMany(Blog, {
  foreignKey: 'user_id'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
})

Blog.belongsTo(Comment, {
  foreignKey: 'blog_id'
});


module.exports = { User, Blog, Comment };
