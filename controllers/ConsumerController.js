const request = require('request-promise');

/**
 * Created by roman on 25.06.19.
 */
module.exports = {
    getAllConsumersByDate: async (req, res, next) => {
        const options = {
            uri: 'http://193.68.75.229:30618/NucleusService2/NucleusService.svc/json/GetLatestEntityConsumers',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "dateTime": {
                    "DateTimeObj": {
                        "Hour": 12,
                        "Day": 1,
                        "Year": 1901,
                        "Minute": 0,
                        "Month": 1,
                        "Second": 0,
                        "IsPopulated": true
                    },
                    "Login": "1mobApp",
                    "Password": "12345",
                    "Scope": "ETG_Gas"
                }
            },
            json: true
        };
        const query = req.query;
        //const date = query.dateFrom;

        let result = await request(options);

        return res.status(200).send(result);
    }
};