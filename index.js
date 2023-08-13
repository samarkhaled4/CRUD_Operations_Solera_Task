const express=require('express');
const dotenv=require('dotenv').config();
const cors=require('cors')
const studentsRouter=require('./routes/students');

//load database configrations annd connect to it
require('./dbconfig');

const app=express();

//important middelwares to post and get data througth our database
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/students',studentsRouter);

const PORT=process.env.PORT || 3000;
app.listen(PORT,(err)=>{
    if(err) console.log(err)
    else console.log(`Server up on Port ${PORT}`)
});