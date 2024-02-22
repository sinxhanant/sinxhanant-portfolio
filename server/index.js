const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const MessageModel  = require('./models/MessageModel.jsx');

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://anantsinxh:pRIE4KNPHnUKe4TM@messages.gnotdqy.mongodb.net/?retryWrites=true&w=majority&appName=messages")


app.post("/sendMsg", (req, res) => {
    MessageModel.create(req.body)
    .then(messages => res.json(messages))
    .catch(err => res.json(err))
})


app.listen(3001, ()=>{
    console.log("Server is running")
})