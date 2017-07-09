var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    rules    : [
        {
            rule_id            : String,
            rule_name          : String,
            rule_description   : String,
            approval           : Boolean,
            medical_certificate: Boolean,
            updated_at         : Date
        }
    ],
    createdAt: Date,
    updatedAt: Date

});

exports.Rule = mongoose.model('Rule', schema);