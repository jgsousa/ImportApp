var db = require('mongoose');

var IntCodeSchema = new db.Schema({
    countryISO:String,
    code: String
});

IntCodeSchema.statics.getAllIntCodes = function (callback) {
    this.find({}, {}, callback);
};

IntCodeSchema.statics.getIntCodeForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

IntCodeSchema.statics.updateIntCode = function (IntCode, callback) {
    this.update({_id: IntCode._id}, IntCode, {upsert: true}, callback);
};

IntCodeSchema.statics.createIntCode = function (IntCode, callback) {
    var u = new this(IntCode);
    u.save(callback);
};

IntCodeSchema.statics.deleteForId = function (id, callback) {
    this.getIntCodeForId(id, function(err, IntCode){
        IntCode.remove(callback);
    });

};

module.exports = db.model('IntCode', IntCodeSchema);