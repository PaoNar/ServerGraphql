const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const connectDB = require('../../config/db')

const user = [{
    _id:'1',
    email: 'a@gmil.com',
    password: '1234'
    },{
        _id: '2',
        email: 'a@gmil.com',
        password: '1234'
        }

]


module.exports = {
    getUser:() =>{
        return user
        
    },
    // login: async (root, {email}) =>{
    //     const user = await User.findOne( { email: email });
    //     if(!user){
    //         console.log('Usuario invalido');
    //         //throw new Error ('user invàlido');
    //     }else {
    //         let token = jwt.sign({userId: user.id, email: user.email}, process.env.KEY_JWT, {
    //             algorithm: "HS256",
    //             expiresIn: '1h'
    //         });
    //     }
    //     // const isEqual =  await bcrypt.compare(password, users.password);
    //     // if(!isEqual){
    //     //     throw new Error ('Password invàlido');
    //     // }
    //     //return { userId: user.id , token: token, tokenExpiration: 1 }
    //     return user
        
    // }
};  










