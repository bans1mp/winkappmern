const router = require("express").Router() ;
const User = require("../models/User") ;
const bcrypt = require("bcrypt") ;


//REGISTER
router.post("/register" , async (req ,res) => {
    

    try {
        //gen salt and hash password
        const salt = await bcrypt.genSalt(10) ;
        const hashedPassword = await bcrypt.hash(req.body.password , salt) ;

        //gen user 
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        //save user and send res
        const user = await newUser.save() ;
        res.status(200).json(user) ;
    }
    catch(err) {
        res.status(500).json(err) ;
    }

    
})

//LOGIN
router.post("/login" , async (req , res) => {
    try{
        const user = await User.findOne({email: req.body.email}) ;
        if(!user){
            res.status(404).json("User not found") ;
        }
        const validPassword = await bcrypt.compare(req.body.password , user.password) ;
        if(!validPassword){
            res.status(400).json("wrong password") ;
        }

        res.status(200).json(user) ;
    } catch(err) {
        res.status(500).json(err) ;
    }
})

module.exports = router ;