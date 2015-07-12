var db = require('mongoose');

var ProformaSchema = new db.Schema({
    number:String,
    exporterId:String,
    importerId:String,
    countryOrigin:String,
    countryDestination:String,
    incoterms:String,
    freight:Number,
    insurance:Number,
    lineItems:[{
        article:Object,
        quantity:Number,
        unitprice:Number
    }]
});

ProformaSchema.statics.getAllProformas = function (callback) {
    this.find({}, {}, callback);
};

ProformaSchema.statics.getProformaForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

ProformaSchema.statics.updateProforma = function (Proforma, callback) {
    this.update({_id: Proforma._id}, Proforma, {upsert: true}, callback);
};

ProformaSchema.statics.createProforma = function (Proforma, callback) {
    var u = new this(Proforma);
    u.save(callback);
};

ProformaSchema.statics.deleteForId = function (id, callback) {
    this.getProformaForId(id, function(err, Proforma){
        Proforma.remove(callback);
    });

};

module.exports = db.model('Proforma', ProformaSchema);