const express = require('express')
const cors = require('cors')
const mongooe = require('mongoose')
const app = express()
require('dotenv').config()
app.use(cors)
app.use(express.json())

const port = process.env.PORT 
const url = process.env.MONGO_url

mongooe.connect(url).then(()=>{
    console.log("sucessfully connected")
}).catch((error)=>{
    console.log(error)
})










app.listen(port,()=>{
    console.log("hi")
})