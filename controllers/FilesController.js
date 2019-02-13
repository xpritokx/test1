const fs = require('fs');
const facilityService = require('../services/FilesService');
const createDataHelper = require('../helpers/errorHandler');
const formidable = require('formidable');

let filesDirectory = __dirname.replace('controllers', 'files/');

async function readFile(req, res) {
    let fileName = req.params.name;
    let status;

    let foundFileByName = await fs.existsSync(filesDirectory + fileName);

    if (!foundFileByName) {
        let message = 'File with this name not found.';

        status = 'error';

        return res.status(404).send({
            status,
            message
        });
    }

    console.log('readFile');

    res.download(filesDirectory + fileName);
}

async function saveFile(req, res) {
    let fileName = req.params.name;
    let status;
    let form;

    let foundFileByName = await fs.existsSync(filesDirectory + fileName);

    if (foundFileByName) {
        let message = 'File with this name is already exists.';

        status = 'error';

        return res.status(400).send({
            status,
            message
        });
    }

    form = new formidable.IncomingForm();
    form.parse(req);

    if ((Number(form.bytesExpected) > 1048576)) {
        let message = 'The uploaded file likely exceeded the maximum file size (1024 kB) that this server supports';

        status = 'error';

        res.status(400).send({
            status,
            message
        });
    }

    form.on('fileBegin', function (name, file){
        file.path = filesDirectory + fileName;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    status = 'success';

    res.status(200).send({
        status,
        fileName
    });
}

async function deleteFile(req, res) {
    let fileName = req.params.name;
    let status;

    console.log('deleteFile');

    let foundFileByName = await fs.existsSync(filesDirectory + fileName);

    if (!foundFileByName) {
        let message = 'File with this name not found.';

        status = 'error';

        return res.status(404).send({
            status,
            message
        });
    }

    await fs.unlink(filesDirectory + fileName);

    status = 'success';

    res.status(200).send({
        status,
        fileName
    });
}

module.exports = {
    readFile,
    saveFile,
    deleteFile
};