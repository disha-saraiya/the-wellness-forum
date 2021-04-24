var mongoose = require('mongoose');
var UserSchema = require('./user.model');

UserSchema.statics = {
    create : function(data, cb) {
        var user = new this(data);
        user.save(cb);
    },

    get: function(username) {
        return this.findOne({userName: username}).exec();
    },

    getByEmail: function(email){
        return this.findOne({emailId: email}).exec(); 
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var userModel = mongoose.model('User', UserSchema);
module.exports = userModel;