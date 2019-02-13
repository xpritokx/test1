let express = require('express');
let router = express.Router();

let FileController = require('../controllers/FilesController');

//get file by name
router.get('/:name', FileController.readFile);

//create new file
router.post('/:name', FileController.saveFile);

//delete file by name
router.delete('/:name', FileController.deleteFile);

module.exports = router;