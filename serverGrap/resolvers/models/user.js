;
'use strict'

const mongoose = require('mongoose')

const { Schema } = mongoose;

const userModel = Schema({

    email: {
        type: String
    },
    password: {
        type: String
    }

})


module.exports = mongoose.model("usuarios", userModel);