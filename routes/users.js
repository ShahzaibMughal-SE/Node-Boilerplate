const router = require('express').Router();
const ResponseWrapper = require('../responsewrapper');
const User = require('../model/User');
const rw = new ResponseWrapper();
const Cryptr = require('cryptr');
const jwt = require("jsonwebtoken");
const cryptr = new Cryptr(process.env.EKEY);

router.post('/signup',async (req,res)=>{

    try {

        if (!(req.body.userName && req.body.emailAddress && req.body.password)) {
            res.status(400).send("posted body is null or invalid");
        }

        const exuser = await User.findOne({ emailAddress: req.emailAddress });
        if (exuser) {
            res.status(409).send("Email Already Exists");
        }

        const encryptedPassword = cryptr.encrypt(req.body.password);

        const newUser = new User({
            userName:req.body.userName,
            emailAddress:req.body.emailAddress.toLowerCase(),
            password : encryptedPassword
        });

        const savedUser = await newUser.save();

        res.json(rw.GetSuccessResponse(savedUser));

    } catch (error) {
        res.json(rw.GetErrorResponse(error));
    }
});


router.post('/signin', async (req, res) => {

    console.log(`client inside api with payload = ${req.body.emailAddress} - - ${req.body.password} -- - ${req.body.userName}`);
try {
    if (!(req.body.emailAddress && req.body.password))
    res.status('409').end('user name, email or password required');

    console.log('level 2');
var user = {};
if (req.body.emailAddress)
     user = await User.findOne({ emailAddress: req.body.emailAddress.toLowerCase() });
else user = await User.findOne({ userName: req.body.userName });

if (!user)
    res.status('404').end('no such user name or email found');

const decriptedPassword = cryptr.decrypt(user.password);
if(decriptedPassword.match(req.body.password)){
  const email =  user.emailAddress;
    const token = jwt.sign(
        { user_id: user._id,email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
 
   res.status(200).json({user:user,token:token,expiresIn:2});
}
else {
    res.status(400).send("Invalid Credentials");
}
} catch (error) {
    res.json(rw.GetErrorResponse(error));
}

});

module.exports = router;