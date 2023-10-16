var mongoose = require('mongoose')

//schema

var user_Schema = new mongoose.Schema({

     name:{
          type : String
     },
     mention: {
          type : String
     },
     image: {
          type : String
     }
})

module.exports = mongoose.model('User', user_Schema)