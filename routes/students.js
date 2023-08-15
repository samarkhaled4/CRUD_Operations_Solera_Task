const Student=require('../models/student');
const studentsRouter=require('express').Router();

//get all students
studentsRouter.get('/',async(req,res)=>{
    try{
        const students=await Student.find();
        res.json(students);
    }
    catch(err){
        res.send(err);
    }
})

//add a student
studentsRouter.post('/',async(req,res)=>{
    const newStudent={
        name:req.body.name,
        age:parseInt(req.body.age)
    }
    try{
        const s=await Student.create(newStudent);
        res.json(s);
    }
    catch(err){
        res.send(err);
    }
})

//get a specific student
studentsRouter.get('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const s=await Student.findById(id);
        res.json(s);
    }
    catch(err){
        res.send(err);
    }
})

//edit info about a student
studentsRouter.patch('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const s=await Student.findByIdAndUpdate({_id:id},
            {$set:{name:req.body.name,age:parseInt(req.body.age)}},{new:true});
            res.json(s);
    }
    catch(err){
        res.send(err);
    }
})

//delete a student
studentsRouter.delete('/:id',async(req,res)=>{
    try{
        const s=Student.findByIdAndDelete(req.params.id);
        res.json(s);
    }
    catch(err){
        res.send(err);
    }
})

module.exports=studentsRouter;