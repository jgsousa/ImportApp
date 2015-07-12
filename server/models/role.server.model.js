var db = require('mongoose');

var actions = {
  values: 'importer exporter supplier despachante'.split(' '),
  message: 'Invalid action'
};

var RoleSchema = new db.Schema({
    name: String,
    actions:[{ type:String, enum:actions}]
});

RoleSchema.statics.getAllRoles = function (callback) {
    this.find({}, {}, callback);
};

RoleSchema.statics.getRoleForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

RoleSchema.statics.updateRole = function (Role, callback) {
    this.update({_id: Role._id}, Role, {upsert: true}, callback);
};

RoleSchema.statics.createRole = function (Role, callback) {
    var u = new this(Role);
    u.save(callback);
};

RoleSchema.statics.deleteForId = function (id, callback) {
    this.getRoleForId(id, function(err, Role){
        Role.remove(callback);
    });

};

module.exports = db.model('Role', RoleSchema);