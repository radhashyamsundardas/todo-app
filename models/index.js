const Task = require('./task');
const User = require('./user');

User.hasMany(Task,{
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Task.belongsTo(User,{
    foreignKey:"user_id",
});

module.exports = {User,Task};