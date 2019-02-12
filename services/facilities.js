const FacilitySchema = require('../models/clubFacilities').Facility;

const getFacilitiesByIds = async facilities => {
    await FacilitySchema.aggregate([
        {
            $unwind: {
                path: '$club_facilities'
            }
        }, {
            $match: {
                'club_facilities.club_facility_id': {
                    $in: facilities
                }
            }
        }, {
            $lookup: {
                from: 'rules',
                localField: 'null',
                foreignField: 'null',
                as: 'rules'
            }
        }, {
            $unwind: {
                path: '$rules'
            }
        }, {
            $unwind: {
                path: '$rules.rules'
            }
        }, {
            $project: {
                club_facility_id: '$club_facilities.club_facility_id',
                club_facility_name_en: '$club_facilities.club_facility_name_en',
                club_facility_name_it: '$club_facilities.club_facility_name_it',
                club_facility_rule_id: '$club_facilities.club_facility_rule_id',
                rule_id: '$rules.rules.rule_id',
                rule_name: '$rules.rules.rule_name',
                rule_description: '$rules.rules.rule_description',
                approval: '$rules.rules.approval',
                medical_certificate: '$rules.rules.medical_certificate',
                updated_at: '$rules.rules.updated_at',
                result: {$eq: ['$club_facilities.club_facility_rule_id', '$rules.rules.rule_id']}
            }
        }, {
            $match: {
                result: true
            }
        }, {
            $group: {
                _id: '$club_facility_id',
                club_facility_name_en: {$first: '$club_facility_name_en'},
                club_facility_name_it: {$first: '$club_facility_name_it'},
                club_facility_rule_id: {$first: '$club_facility_rule_id'},
                rule: {$push: {
                    rule_id: '$rule_id',
                    rule_name: '$rule_name',
                    rule_description: '$rule_description',
                    approval: '$approval',
                    medical_certificate: '$medical_certificate',
                    updated_at: '$updated_at',
                }}
            }
        }
    ]);
};

module.exports = {
    getFacilitiesByIds
};