;
'use strict'

let Cursos = require('../models/Cursos')
let { ObjectID } = require('mongodb')

let nuevoCurso = async (root, {input}) =>{
    let curso
    try{
        curso = await Cursos.create(input)
    }catch(error){
        console.error(error)
    }
    return  curso
},

editarCurso = async (root, {id, input}) =>{
    let curso
    try{
        let asistentes  = []
        if (!input.asistentes.length && input.asistentes.length > 0){
            input.asistentes.forEach(asistente => {

                asistentes.push(ObjectID(asistente))
            })
            
        }
        input.asistentes = asistentes
        console.log(input.asistentes)  
        await Cursos.updateOne(
             {_id: ObjectID(id)},
             { $set: input}
         )
        
        curso = await Cursos.find({_id: ObjectID(id)}) 
    }catch(error){
        console.error(error)
    }
    return curso[0]
}

module.exports = {
    nuevoCurso,
    editarCurso
}