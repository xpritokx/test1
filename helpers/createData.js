const mongoose = require('mongoose');
const async = require('async');

export default (objectsArray, modelName, cb) => {
    let model;

    async.each(objectsArray, function (item, eCb) {
        model = new mongoose.models[modelName](item);
        model.save().then(function () {
            eCb();
        });
    }, function (err, res) {
        if (err) {
            return cb(err);
        }

        cb();
    });
};