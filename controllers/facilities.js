const fs = require('fs');
const data = require('../constants/data').data;
const facilityService = require('../services/facilities');
const createDataHelper = require('../helpers/createData');

function getData(req, res) {
    async.series([
        function (sCb) {
            createDataHelper(data.facilities, 'Facility', sCb);
    }, function (sCb) {
            createDataHelper(data.rules, 'Rule', sCb);
        }
    ], function (err) {
        const searchData = [
            '442b0260-c378-11e6-849f-2d3cce21cca1',
            '4b77ab50-c0bb-11e6-a8cf-65fef1c91a7c'
        ];
        let facilities;

        if (err) {
            return res.status(500).send({
                status: 'error',
                message: err.message,
                data: null
            });
        }

        console.log('all data saved successfully');
        console.log('we are getting data by "club_facility_id"');

        try {
            facilities = facilityService.getFacilitiesByIds(searchData);
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: err.message,
                data: null
            });
        }

        res.status(200).send({
            status: 'success',
            message: 'facilities got is successful',
            data: facilities
        });
    });
}

module.exports = {
    getData
};