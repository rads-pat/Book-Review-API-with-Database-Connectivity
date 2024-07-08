const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
SECRET_KEY=('your_secret_key_here')

const register = async (req,res) => {
try {
    const {username,password,email} = req.body;
        console.log("req.body", req.body);
    const user = new User({username,password,email});
    const salt = await bcrypt.genSalt(10);
     user.password = await bcrypt.hash(password,salt);
    await user.save();
    res.status(200).send({message:'user register created succesfully'});
} catch (error) {
    res.status(400).send({message:' Error creating user register'});
}
};

const login  = async(req,res) => {
    try {
        const {username, password} = req.body;
        console.log("req.body", req.body);
        const user = await User.findOne({username});
        console.log("user", user);
        
        if(!user){
            return res.status(400).send({message:"Invalid Username or password"})
        }

        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            return res.status(400).send({message:"Invalid Username or password"})
        }

        const token = jwt.sign({ userId: user._id }, SECRET_KEY, {expiresIn: '1h'});
          res.send({ token });

    } catch (error) {
        res.status(500).send({ message: 'Error logging in' });
    }
}


module.exports = {register,login};