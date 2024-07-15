const express = require('express');
const router = express.Router();
const getRef = require('../controller/referController'); // Import 
const getRefById = require('../controller/referController');

router.get('/refer', getRef);
router.get('/refer:id',getRefById);


module.exports=router