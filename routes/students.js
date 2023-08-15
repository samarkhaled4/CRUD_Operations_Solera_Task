const Student=require('../models/student');
const studentsRouter=require('express').Router();

//get all students
studentsRouter.get('/',async(req,res)=>{
    try{
        const students=await Student.find();
        res.status(200).json(students);
    }
    catch(err){
        res.status(404).send({error:"There aren't any students yet!"});
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
        res.status(200).json(s);
    }
    catch(err){
        res.status(404).send({error:"Failed to add a student!"});
    }
})

//get a specific student
studentsRouter.get('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const s=await Student.findById(id);
        res.status(200).json(s);
    }
    catch(err){
        res.status(404).send({error:"Failed to get this student!"});
    }
})

//edit info about a student
studentsRouter.patch('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const s=await Student.findByIdAndUpdate({_id:id},
            {$set:{name:req.body.name,age:parseInt(req.body.age)}},{new:true});
            res.status(200).json(s);
    }
    catch(err){
        res.status(404).send({error:"Failed to update informatiion of this student!"});
    }
})

//delete a student
studentsRouter.delete('/:id',async(req,res)=>{
    try{
        const s=await Student.findByIdAndDelete(req.params.id);
        res.status(200).send({message:"Student deleted successfully.."});
    }
    catch(err){
        res.status(404).send({error:"Failed to delete the student!"});
    }
})

module.exports=studentsRouter;