const studentsRouter=require('express').Router();

//get all students
studentsRouter.get('/',(req,res)=>{
    res.send("get all students");
})

module.exports=studentsRouter;