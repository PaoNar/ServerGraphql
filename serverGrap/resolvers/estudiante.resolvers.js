;
'use strict'

const estudianteQueries = require('./queries/estudiante.queries')
const estudianteMutations = require('./mutations/estudiante.mutations')


module.exports = {
    Query: estudianteQueries,
    Mutation: estudianteMutations

}