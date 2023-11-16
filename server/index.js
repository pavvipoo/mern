const express =require('express')
const mongoose=require("mongoose")
const cors=require("cors")
const StudentModel = require('./model/Employee')

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://poornimachakoti:poornima@cluster0.on0sdl9.mongodb.net/productsdb")
app.post('/register',(req,res)=>{
    StudentModel.create(req.body)
    .then(student=>res.json(student))
    .catch(err =>res.json(err))
})
app.listen(3006,()=>{
    console.log("server is running")
})