;
'use strict'

let connectDb = require('../../config/db')
let {ObjectID} = require('mongodb')

module.exports = {
    getEstudiantes: async () => {
        let db, estudiantes
        try{
            db = await connectDb()
            estudiantes = await db.collection('estudiantes').find().toArray()
        }catch(err){
            console.error(err)
        }
        return estudiantes
    },
    // getEstudiante: async (root, { id }) => {
    //     let db, estudiante
    //     try{
    //         db =  await connectDb()
    //         estudiante = await db.collection('estudiantes').findOne({_id: ObjectID(id)})
    //     }catch(err){
    //         console.error(err)
    //     }
    //     return estudiante
    // },

}