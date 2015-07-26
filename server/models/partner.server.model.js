var db = require('mongoose');

var PartnerSchema = new db.Schema({
    name:String,
    address:String,
    VATnumber:String,
    roles: [ { roleId:String }],
    billingPlan: String,
    assortment:[{ article:String, code:String }]
});

PartnerSchema.statics.getAllPartners = function (callback) {
    this.find({}, {}, callback);
};

PartnerSchema.statics.getPartnerForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

PartnerSchema.statics.updatePartner = function (Partner, callback) {
    this.update({_id: Partner._id}, Partner, {upsert: true}, callback);
};

PartnerSchema.statics.createPartner = function (Partner, callback) {
    var u = new this(Partner);
    u.save(callback);
};

PartnerSchema.statics.deleteForId = function (id, callback) {
    this.getPartnerForId(id, function(err, Partner){
        Partner.remove(callback);
    });

};

PartnerSchema.statics.getForRoles = function(role, callback){
  this.find({ roles:[ { role:role }]},{}, callback) ;
};

module.exports = db.model('Partner', PartnerSchema);