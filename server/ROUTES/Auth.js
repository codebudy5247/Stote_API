const express=require('express');
const router=express.Router();
const {CreateUser,LoginUser}=require('../CONTROLLER/auth.controller')


router.post('/user/signup',CreateUser);
router.post('/user/signin',LoginUser);


module.exports=router;