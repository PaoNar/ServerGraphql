;
'use strict'

let connectDb = require('../../config/db')
let { ObjectID } = require('mongodb')
let jwt = require('jsonwebtoken')

module.exports = {
    getCursos: async (args, req, res) => {
        // if(!req.isAuth){
        //     throw new Error('No tiene Permisos')
        // }
        let db, cursos, titulo
        try{
            db = await connectDb()
            cursos = await db.collection('cursos').find().toArray()
                if(cursos) {
                        
                        token = jwt.sign({ data: cursos }, process.env.KEY_JWT, {
                            algorithm: "HS256",
                            expiresIn: 600,
                        });
                    
                    console.log(token)
                    return cursos
                }else{
                    console.log('error')
                }
        }catch(error){
            console.error(error)
        }
        return cursos
    },
    getCurso: async (root, { id }) => {
        let db, curso
        try{ 
            db =  await connectDb()
            curso = await db.collection('cursos').findOne({_id: ObjectID(id)})
        }catch(error){
            console.error(error)
        }
        return curso
    }

}