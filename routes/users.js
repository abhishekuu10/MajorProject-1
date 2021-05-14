const express=require('../node_modules/express');
const router=express.Router();
const userController=require('../controllers/user_controller');

router.get('/',userController.home);

router.get('/profile',userController.profile );

router.get('/posts',userController.posts);


module.exports=router;