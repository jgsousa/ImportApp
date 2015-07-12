var db = require('mongoose');

var ContainerSchema = new db.Schema({
    shippingId:String,
    owner: String,
    assignedTo: String
});

ContainerSchema.statics.getAllContainers = function (callback) {
    this.find({}, {}, callback);
};

ContainerSchema.statics.getContainerForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

ContainerSchema.statics.updateContainer = function (Container, callback) {
    this.update({_id: Container._id}, Container, {upsert: true}, callback);
};

ContainerSchema.statics.createContainer = function (Container, callback) {
    var u = new this(Container);
    u.save(callback);
};

ContainerSchema.statics.deleteForId = function (id, callback) {
    this.getContainerForId(id, function(err, Container){
        Container.remove(callback);
    });

};

module.exports = db.model('Container', ContainerSchema);
