var mongoose = require('mongoose');
var fs = require('fs');
var async = require('async');
var dataFacilities = require('../constants/data');
var RuleSchema = require('../models/clubRules').Rule;
var FacilitySchema = require('../models/clubFacilities').Facility;

function getData() {
    var clubFacilitiesData;
    var clubFacilitiesModel;
    var clubRulesData;
    var clubRulesModel;

    /*fs.readFile('./mongo_db_task.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);

        data = JSON.parse(data);
        console.log(data);

    });*/

    /*clubFacilitiesData = {
        club_id        : 'ololo1',
        club_facilities: [
            {
                club_facility_id            : 'q',
                facility_id                 : 'w',
                club_facility_name_en       : 'e',
                club_facility_name_it       : 'r',
                club_facility_priority_order: 't',
                club_facility_description_en: 'y',
                club_facility_description_it: 'u',
                club_facility_rule_id       : 'i'
            }
        ],
        "createdAt"    : Date.now(),
        "updatedAt"    : Date.now()
    };*/

    async.each(data, function (item) {

    }, function () {

    });

    clubFacilitiesModel = new mongoose.models.Facility(clubFacilitiesData);
    clubFacilitiesModel.save(function (err, res) {
        console.log(res);
    });
}

module.exports = {
    getData: getData
};