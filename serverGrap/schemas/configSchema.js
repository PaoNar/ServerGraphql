;
'use strict'

const {makeExecutableSchema} = require('graphql-tools'),
      {join} = require('path'),
      {readFileSync} = require('fs'),
      
      pruebaResolver = require('../resolvers/pruebas.resolvers'),
      cursoResolver = require('../resolvers/curso.resolvers'),
      estudianteResolver = require('../resolvers/estudiante.resolvers'),
      createUserResolvers = require('../resolvers/createUser.resolvers')
   

let typeDefs = readFileSync(join(__dirname,  '../schemas', 'schema.graphql'), 'utf-8')
let schema = makeExecutableSchema({ typeDefs, resolvers:[
    cursoResolver,
    pruebaResolver,
    estudianteResolver,
    createUserResolvers
]})


module.exports =  {schema}



