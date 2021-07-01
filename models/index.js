const Activity = require("./Activity");
const Comment = require("./Comment");
const Like = require("./Like");
const Matchup = require("./Matchup");
const Park = require("./Park");
const ParkActivity = require("./ParkActivity");
const User = require("./User");
const UserPark = require("./UserPark");
const Visit = require("./Visit");
const VisitMedia = require("./VisitMedia");

Visit.hasMany(Comment, {
  foreignKey: 'visit_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Visit, {
  foreignKey: 'visit_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Like, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Like.belongsTo(User, {
  foreignKey: 'user_id'
});

Visit.hasMany(Like, {
  foreignKey: 'visit_id',
  onDelete: 'CASCADE'
});

Like.belongsTo(Visit, {
  foreignKey: 'visit_id'
});

Comment.hasMany(Like, {
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'
});

Park.hasMany(Matchup, {
  foreignKey: 'win_id',
  onDelete: 'SET NULL'
});

Matchup.belongsTo(Park, {
  foreignKey: 'win_id',
  as: 'match_win'
});

Park.hasMany(Matchup, {
  foreignKey: 'loss_id',
  onDelete: 'SET NULL'
});

Matchup.belongsTo(Park, {
  foreignKey: 'loss_id',
  as: 'match_loss'
});

User.hasMany(Matchup, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Matchup.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Visit, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Visit.belongsTo(User, {
  foreignKey: "user_id"
});

Park.hasMany(Visit, {
  foreignKey: 'park_id',
  onDelete: 'SET NULL'
});

Visit.belongsTo(Park, {
  foreignKey: 'park_id'
});

Visit.hasMany(VisitMedia, {
  foreignKey: 'visit_id',
  onDelete: 'CASCADE'
});

VisitMedia.belongsTo(Visit, {
  foreignKey: 'visit_id'
});

Activity.hasMany(Visit, {
  foreignKey: 'activity_id',
  onDelete: 'CASCADE'
});

Visit.belongsTo(Activity, {
  foreignKey: 'activity_id'
})

User.hasMany(UserPark, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

UserPark.belongsTo(User, {
  foreignKey: 'user_id'
});

Park.hasMany(UserPark, {
  foreignKey: 'park_id',
  onDelete: 'CASCADE'
});

UserPark.belongsTo(Park, {
  foreignKey: 'park_id'
});

Park.belongsToMany(Activity, { through: 'ParkActivity' });

Activity.belongsToMany(Park, { through: 'ParkActivity' });

module.exports = {
  Activity,
  Comment,
  Like,
  Matchup,
  Park,
  ParkActivity,
  User,
  UserPark,
  Visit,
  VisitMedia
}