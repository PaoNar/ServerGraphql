const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Usuarios');
const passwordMiddleware = require('../../middleware/Password')

let nuevoUser = async (root, {input}) =>{
    try{
        let passEncript = passwordMiddleware.encritpPass(input)

        if(passEncript != false){
            input.password = passEncript
            user = await User.create(input)
            
            if(user) {
                token = jwt.sign({ data: user }, 'hola', {
                    algorithm: "HS256",
                    expiresIn: 600,
                });
            }else{
                console.log('No se pudo guardar')
            }
        }
        else{
            return passEncript;
        }
    }catch(error){
        console.error(error)
    }
    return user
}

module.exports = {
    nuevoUser 
};  










