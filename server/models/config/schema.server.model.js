var db = require('mongoose');

var CalculationSchema = new db.Schema({
    type:String,
    countryId:String,
    conditions:[{
        step:Number,
        type:Object,
        base:Number
    }]
});

CalculationSchema.statics.getAllCalculations = function (callback) {
    this.find({}, {}, callback);
};

CalculationSchema.statics.getCalculationForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

CalculationSchema.statics.updateCalculation = function (Calculation, callback) {
    this.update({_id: Calculation._id}, Calculation, {upsert: true}, callback);
};

CalculationSchema.statics.createCalculation = function (Calculation, callback) {
    var u = new this(Calculation);
    u.save(callback);
};

CalculationSchema.statics.deleteForId = function (id, callback) {
    this.getCalculationForId(id, function(err, Calculation){
        Calculation.remove(callback);
    });

};

CalculationSchema.statics.getForCountryAndType = function(country, type, callback){
    this.find({type:type, countryId:country}, {}, callback);
};

module.exports = db.model('Calculation', CalculationSchema);