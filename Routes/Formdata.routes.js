const express = require('express');
const { addSignupData, getdata, deleteSingleData,rulesdata } = require('../Controller/Formdata.controller');

let router = express.Router();

router.post('/addSignupData', addSignupData);
router.get('/getdata', getdata);
// Correct the route definition to include the ID parameter
router.delete('/deleteSingleData/:id', deleteSingleData);
router.post('/rulesdata',rulesdata)

module.exports = router;
