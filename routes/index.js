const express=require('express');

const router=express.Router();


const mainController=require('../controllers/index');

router.get('/',mainController.getIndex);

router.get('/membership',mainController.getMembership);

router.post('/membership',mainController.postMembership);

router.get('/members',mainController.getMembers);


module.exports=router;