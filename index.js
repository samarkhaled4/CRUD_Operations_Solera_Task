const express=require('express');
const dotenv=require('dotenv').config();
require('./dbconfig');
const app=express();
const studentsRouter=require('./routes/students');

app.use(studentsRouter);

const PORT=process.env.PORT || 3000;
app.listen(PORT,(err)=>{
    if(err) console.log(err)
    else console.log(`Server up on Port ${PORT}`)
});