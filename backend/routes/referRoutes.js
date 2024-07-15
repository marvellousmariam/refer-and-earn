const express = require('express');
const router = express.Router();
const {getRef,getRefById,createRef,updateRef,deleteRef,deleteAllRef}= require('../controller/referController'); // Import 


router.get('/refer', getRef);
router.get('/refer/:id',getRefById);
router.post('/create',createRef);
router.patch('/update/:id',updateRef);
router.delete('/delete/:id',deleteRef);
router.delete('/deleteall',deleteAllRef);


module.exports=router