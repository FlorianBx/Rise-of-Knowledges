import bcrypt from 'bcrypt';
import User from '../modele/Users';
import jwt from 'jsonwebtoken';

const register = async function (req, res) {
    const {username, email, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    
    if (!hashPassword || typeof hashPassword === 'undefined')
        return res.status(500).json({error: 'cannot hash password'});

    const user = new User({
        username: username,
        email: email,
        password: hashPassword
    })
    const register = await user.save()
    .then(resolve => console.log('user successfully registered !' + resolve))
    .catch(error => console.log('cannot register the user ' + error));

    const token = await jwt.sign({username: username},
        process.env.ACCESS_TOKEN_SECRET, {
            algorithm: "HS256",
            expiresIn: process.env.ACCESS_TOKEN_LIFE
        });
    
    return !register ? res.status(500).json({error: 'cannot register the user'})
    : res.status(200).cookie("token", token, { maxAge: 604800000 }) // 604800000 == 7day
    .json({message: 'you are now logged'});
};

const login = async function (req, res) {
    const {username, password} = req.body;
    const user = await User.findOne({username: username});

    if (!user || typeof user === 'undefined')
        return res.status(500).json({error: 'cannot find a user with that username !'});

    const verifPassword = await bcrypt.compare(password, user.password);
    if (verifPassword === false || typeof verifPassword === 'undefined')
        return res.status(400).json({error: 'invalid username or password'});
    const token = await jwt.sign({username: username},
        process.env.ACCESS_TOKEN_SECRET, {
            algorithm: "HS256",
            expiresIn: process.env.ACCESS_TOKEN_LIFE
        });
    return res.status(200)
    .cookie("token", token, { maxAge: 604800000 })
    .json({message: 'you are now logged'});
};

module.exports = {login, register};