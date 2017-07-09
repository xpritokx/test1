exports = {
    facilities: [{
        club_id        : '123456',
        club_facilities: [
            {
                club_facility_id            : '29330b20-c070-11e6-a8cf-65fef1c91a7c',
                facility_id                 : '29330b20-c070-11e6-a8cf-65fef1c91a7c',
                club_facility_name_en       : 'test1',
                club_facility_name_it       : 'test1',
                club_facility_priority_order: '',
                club_facility_description_en: 'testtesttest1',
                club_facility_description_it: 'testtesttest1',
                club_facility_rule_id       : '123rule'
            },
            {
                club_facility_id            : '442b0260-c378-11e6-849f-2d3cce21cca1',
                facility_id                 : '442b0260-c378-11e6-849f-2d3cce21cca1',
                club_facility_name_en       : 'test2',
                club_facility_name_it       : 'test2',
                club_facility_priority_order: '',
                club_facility_description_en: 'testtesttest2',
                club_facility_description_it: 'testtesttest2',
                club_facility_rule_id       : '456rule'
            }
        ],
        "createdAt"    : '2016-11-09T08:00:00.088Z',
        "updatedAt"    : '2016-11-09T08:00:00.088Z'
    }, {
        club_id        : '78901112',
        club_facilities: [
            {
                club_facility_id            : 'b2528c40-a334-11e6-9343-e5536bc41c79',
                facility_id                 : 'b2528c40-a334-11e6-9343-e5536bc41c79',
                club_facility_name_en       : 'test3',
                club_facility_name_it       : 'test3',
                club_facility_priority_order: '',
                club_facility_description_en: 'testtesttest3',
                club_facility_description_it: 'testtesttest3',
                club_facility_rule_id       : '789rule'
            },
            {
                club_facility_id            : '4b77ab50-c0bb-11e6-a8cf-65fef1c91a7c',
                facility_id                 : '4b77ab50-c0bb-11e6-a8cf-65fef1c91a7c',
                club_facility_name_en       : 'test4',
                club_facility_name_it       : 'test4',
                club_facility_priority_order: '',
                club_facility_description_en: 'testtesttest4',
                club_facility_description_it: 'testtesttest4',
                club_facility_rule_id       : '101112rule'
            }
        ],
        "createdAt"    : '2016-11-09T08:00:00.088Z',
        "updatedAt"    : '2016-11-09T08:00:00.088Z'
    }],
    rules     : [{
        club_id  : '123456',
        rules    : [
            {
                rule_id            : '123rule',
                rule_name          : 'rulerule1',
                rule_description   : 'rulerulerulerule1',
                approval           : true,
                medical_certificate: true,
                updated_at         : '2016-11-09T08:00:00.088Z'
            },
            {
                rule_id            : '123rule',
                rule_name          : 'rulerule2',
                rule_description   : 'rulerulerulerule2',
                approval           : true,
                medical_certificate: true,
                updated_at         : '2016-11-09T08:00:00.088Z'
            }
        ],
        createdAt: '2016-11-09T08:00:00.088Z',
        updatedAt: '2016-11-09T08:00:00.088Z'
    }, {
        club_id  : '78901112',
        rules    : [
            {
                rule_id            : '789rule',
                rule_name          : 'rulerule3',
                rule_description   : 'rulerulerulerule3',
                approval           : true,
                medical_certificate: true,
                updated_at         : '2016-11-09T08:00:00.088Z'
            },
            {
                rule_id            : '101112rule',
                rule_name          : 'rulerule4',
                rule_description   : 'rulerulerulerule4',
                approval           : true,
                medical_certificate: true,
                updated_at         : '2016-11-09T08:00:00.088Z'
            }
        ],
        createdAt: '2016-11-09T08:00:00.088Z',
        updatedAt: '2016-11-09T08:00:00.088Z'
    }]
}
;