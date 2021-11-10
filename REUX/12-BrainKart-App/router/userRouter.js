const express = require('express');
const router = express.Router();
const {check , validationResult} = require('express-validator'); // Express Form Validator//
const User = require('../models/User'); /// import User Already Exists
const bcrypt  = require('bcryptjs');   ///
const gravatar = require('gravatar'); ///
const jwt = require('jsonwebtoken'); ///
const authenticate = require('../middlewares/authenticate');  /// import for Get User Information
const { request, response } = require('express');


/*
    1. Register a User
    URL: 	/user/register
    Fields	name , email , password
    Method	POST
    Access	PUBLIC
 */

//  router.post('/register',(request, response) => { first page code }); //

router.post('/register',[
 check('name').notEmpty().withMessage('User Name is Required'),  /// 
 check('email').isEmail().withMessage('Enter a proper Email'),
 check('password').isLength({min: 6}).withMessage('Enter a proper Password'),
], async (request, response) => {
           /// Registration Logic ///   -> Come to This Page Second Time for  Logic 1
      let errors = validationResult(request);
      if(!errors.isEmpty()){         /// form fill cheyaka direct register Ithe Error Message -> User Name is Required , Enter a proper Email , Enter a proper Password
         return response.status(401).json({errors : errors.array()});
      }
      try{
              /// read the form data                                 2
              let {name  , email , password} = request.body;

              /// user already exists or not                        3
              let user = await User.findOne({email : email});
              if(user){
                 return response.status(401).json({errors : [{msg : 'User already exists'}]});  /// if user is there user already exists Message       
              }    
              /// encode the password        4
              let salt = await bcrypt.genSalt(10);
              password = await bcrypt.hash(password , salt);

              /// avatar image for emai           5
              let avatar = gravatar.url(email , {     //await pettina working pettakunna working
                 s : '200', /// Size
                 r: 'G', /// Rating
                 d : 'mm' /// Default
              });

              /// address of user
              let address = {          /// Same Name as by Database Table Names
               flat : ' ' ,
               street : ' ',
               landmark : ' ',
               city : ' ',
               state : ' ',
               country : ' ',
               pin : ' ',
               mobile : ' '
           };

              /// insert into database   but password is Encoded 
              user = new User ({name , email , password , avatar , address});
              user = await user.save();

              response.status(200).json({           /// Backend Responce Status
                 result : 'success',
                 user : user
              })
      }
      catch (error) {
          console.error(error);
          response.status(500).json({errors : [{ msg : 'Server Error'}]});
      }
});

 /*
    2. Login a User
    URL: 	/user/login
    Fields  email , password
    Method	POST
    Access	PUBLIC
 */

 router.post('/login', [
   check('email').isEmail().withMessage('Enter a proper Email'),
   check('password').isLength({min: 6}).withMessage('Enter a proper Password')
 ], async (request, response) => {
          /// login logic ///
          let errors = validationResult(request);
          if(!errors.isEmpty()){
             return response.status(401).json({errors : errors.array()});
          }
          try {
                /// get the form data
                let { email , password } = request.body;

                /// check email is exists or not in DATABASE
                let user = await User.findOne({email : email});
                if(!user){   /// user email lekunte stop the next level process
                   return response.status(401).json({errors : [{ msg : 'Invalid Credentials'}]});
                }
                /// verify the password
                let isMatch = await bcrypt.compare(password , user.password);
                if(!isMatch){
                   return response.status(401).json({errors : [{ msg : 'Invalid Credentionals'}]});
                }

                /// create a token and send to client  -> got to config and create JWT_SECRET_KEY
                let payload = {
                   user : {
                      id : user.id
                   }
                };
                jwt.sign(payload, process.env.JWT_SECRET_KEY, (err , token) => {
                   if(err) throw err;
                   response.status(200).json({
                      result : 'Login Success',
                      token : token
                   });
                });
          }
          catch(error) {
            console.error(error);
            response.status(500).json({errors : [{msg : 'Server Error'}]});
          }
 });


 /*
    3.GET User Information
    URL: 	/user/
    Fields  No-Fields
    Method	GET
    Access	PRIVATE
 */
         
       /// GET User Information ////  
 router.get('/', authenticate, async (request, response) => {   
       try {
          let user= await User.findById(request.user.id).select('-password');   // hide pass .select('-password');   
          response.status(200).json(user);
       } 
       catch (error) {
          console.error(error);
          response.status(500).json({errors : [{ msg : 'Server Error'}]});
       }
        
 });


 /*
    4. Create / Update Address
    URL	/user/address
    Fields	flat , street , landmark , city , state , country , pin , mobile
    Method	POST
    Access	PRIVATE
 */
router.post('/address',[
   /// Check Adress Form Valodation
   check('flat').notEmpty().withMessage('flat is required'),  
   check('street').notEmpty().withMessage('street is required'),
   check('landmark').notEmpty().withMessage('landmark is required'),
   check('city').notEmpty().withMessage('city is required'),
   check('state').notEmpty().withMessage('state is required'),
   check('country').notEmpty().withMessage('country is required'),
   check('pin').notEmpty().withMessage('pin is required'),
   check('mobile').notEmpty().withMessage('mobile is required'),
], authenticate, async (request, response) => {
     // Create / Update Address // 
    let errors = validationResult(request);
    if(!errors.isEmpty()){
       return response.status(401).json({errors : errors.array()});
    }
    try {
            /// Get the Form Data 
            let address = {
               flat : request.body.flat,
               street : request.body.street,
               landmark : request.body.landmark,
               city : request.body.city,
               state : request.body.state,
               country : request.body.country,
               pin : request.body.pin,
               mobile : request.body.mobile,
            };
            /// get a user from database
            let user = await User.findById(request.user.id);
            user.address = address;
            user = await user.save(); /// Save user data in Database
            response.status(200).json(user);
    }
    catch(error){
      console.error(error);
      response.status(500).json({errors : [{ msg : 'Server Error'}]});
    }
});

module.exports = router;













