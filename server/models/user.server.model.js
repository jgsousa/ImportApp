var db = require('mongoose');

var UserSchema = new db.Schema({
    name: String,
    email: String,
    password: String,
    partnerId: String,
    updatedAt: {type: Date, default: Date.now},
    passwordInitial: Boolean,
    isAdmin:Boolean
});

UserSchema.methods.verifyPassword = function (password) {
    return true;
};

UserSchema.statics.getAllUsers = function (callback) {
    this.find({}, {}, callback);
};

UserSchema.statics.getUserForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

UserSchema.statics.updateUser = function (user, callback) {
    this.update({_id: user._id}, user, {upsert: true}, callback);
};

UserSchema.statics.createUser = function (user, callback) {
    var u = new this(user);
    u.save(callback);
};

UserSchema.statics.deleteForId = function (id, callback) {
    this.getUserForId(id, function(err, user){
        user.remove(callback);
    });

};