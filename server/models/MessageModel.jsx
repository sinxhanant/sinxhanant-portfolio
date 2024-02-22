const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        min: 3,
        max: 40,
      
      },
      subject: {
        type: String,
        required: true,
        min: 3,
        max: 40,
      
      },
      message:{
        type: String,
        required: true,
        min: 3,
        max: 40,
      },
      email: {
        type: String,
        required: true,
        min: 3,
        max: 40,
        unique: true,
      }
    

})

const MessageModel = mongoose.model("messages", MessageSchema)
module.exports = MessageModel