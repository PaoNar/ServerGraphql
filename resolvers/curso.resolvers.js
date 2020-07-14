;
'use strict'

const cursoQueries = require('./queries/curso.queries')
const cursoMutations = require('./mutations/curso.mutations')
const cursoTypes = require('./types/curso.types')


module.exports = {
    Query: cursoQueries,
    Mutation: cursoMutations,
    ...cursoTypes

}