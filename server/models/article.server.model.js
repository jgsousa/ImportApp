var db = require('mongoose');

var types = {
    value : ['Machine Parts', 'Trade Goods']
};

var ArticleSchema = new db.Schema({
    uniqueId:String,
    name:String,
    type: types,
    internationalCodes:[{
        countryId: String,
        code: String
    }]
});

ArticleSchema.statics.getAllArticles = function (callback) {
    this.find({}, {}, callback);
};

ArticleSchema.statics.getArticleForId = function (id, callback) {
    this.findOne({_id: id}, {}, callback);
};

ArticleSchema.statics.updateArticle = function (Article, callback) {
    this.update({_id: Article._id}, Article, {upsert: true}, callback);
};

ArticleSchema.statics.createArticle = function (Article, callback) {
    var u = new this(Article);
    u.save(callback);
};

ArticleSchema.statics.deleteForId = function (id, callback) {
    this.getArticleForId(id, function(err, Article){
        Article.remove(callback);
    });

};

module.exports = db.model('Article', ArticleSchema);