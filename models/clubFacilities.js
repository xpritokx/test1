var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    club_id    : String,
    club_facilities : [
        {
            club_facility_id : String,
            facility_id : String,
            club_facility_name_en : String,
            club_facility_name_it : String,
            club_facility_priority_order : String,
            club_facility_description_en : String,
            club_facility_description_it : String,
            club_facility_rule_id : String
        }
    ],
    "createdAt" : Date,
    "updatedAt" : Date
});

exports.Facility = mongoose.model('Facility', schema);