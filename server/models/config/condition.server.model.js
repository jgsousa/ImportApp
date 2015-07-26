var db = require('mongoose');

var ConditionTypeSchema = new db.Schema({
    typeId:String,
    calculationType:String
});

ConditionTypeSchema.statics.getAllConditionTypes = function (callback) {
    this.find({}, {}, callback);
};

ConditionTypeSchema.statics.getConditionTypeForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

ConditionTypeSchema.statics.updateConditionType = function (ConditionType, callback) {
    this.update({_id: ConditionType._id}, ConditionType, {upsert: true}, callback);
};

ConditionTypeSchema.statics.createConditionType = function (ConditionType, callback) {
    var u = new this(ConditionType);
    u.save(callback);
};

ConditionTypeSchema.statics.deleteForId = function (id, callback) {
    this.getConditionTypeForId(id, function(err, ConditionType){
        ConditionType.remove(callback);
    });

};

module.exports = db.model('ConditionType', ConditionTypeSchema);