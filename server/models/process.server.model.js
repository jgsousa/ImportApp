var db = require('mongoose');

var ProcessSchema = new db.Schema({
    number: String,
    exporterId: String,
    importerId: String,
    countryOrigin: String,
    countryDestination: String,
    type: String,
    shippingDoc: String,
    dispatcherId: String,
    proformas: [{
        proforma: Object
    }],
    containers: [{
        container: Object
    }]

});

ProcessSchema.statics.getAllProcesss = function (customer, callback) {
    this.find({}, {}, callback);
};

ProcessSchema.statics.getProcessForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

ProcessSchema.statics.updateProcess = function (Process, callback) {
    this.update({_id: Process._id}, Process, {upsert: true}, callback);
};

ProcessSchema.statics.createProcess = function (Process, callback) {
    var u = new this(Process);
    u.save(callback);
};

ProcessSchema.statics.deleteForId = function (id, callback) {
    this.getProcessForId(id, function (err, Process) {
        Process.remove(callback);
    });
};

ProcessSchema.statics.getAllProcessForCustomer = function (customerId, callback) {
    this.find([{exporterId: customerId}, {importerId: customerId}], {}, callback);
};

ProcessSchema.statics.getAllProcessForDispatcher = function (dispatcherId, callback) {
    this.find({dispatcherId: dispatcherId}, {}, callback);
};

module.exports = db.model('Process', ProcessSchema);