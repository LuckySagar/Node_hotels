const express = require('express')
const router = express.Router(); //The express.Router() function in Express.js creates a new router object that can handle requests in a modular and organized way
const Person = require('./../models/Person');

router.post('/',async (req,res)=>{
    try{
      const data = req.body // Assuming the request body contains the person data
  
      //creating new person document(records in sql) using the mongoose model
      const newPerson = new Person (data);
   
      //save new person to the database
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    }catch(err){  
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
  })
  router.get('/', async (req,res)=>{
    try{ 
      const data = await Person.find();
      console.log("data saved");
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"});
      
    }
  })
  router.get('/:workType', async(req , res)=>{
    try{
      const workType = req.params.workType;
      if(workType == 'chef' || workType=='waiter'|| workType=='manager'){
        const response = await Person.find({work : workType});
        console.log('response fetched');
        res.status(200).json(response);
      }else{
        res.status(400).json({error:'Invalid work type'});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"});
    }
  })

  router.put('/:id',async(res,req)=>{ // we do not wrote _id quki id here is just a variable
    try{
         const personId = req.params.id; //Extract the id from URL parameter
         const updatedPersondata = req.body; // we send as a body not in json format(aisa hi hota hai mere mitra just)
  
         const response = await Person.findByIdAndUpdate(personId,updatedPersondata,{
          new: true,//update hone ke bd as a response usko update karega
          runValidators: true //ye hmko allow de raha hai jitna sara Person model me hm required field dale hai usko update krne ka (run mongoose validation)
         });
         //pehla paramter(personID) find kr rha o data ko jisko update krna hai or dusra wala parameter(updatedPersondata) usko update kar raha hai raja ji
         
         if(!response){
          res.status(404).json({error: 'Person Not Found'}) 
         }
         // ye bs isiliye hai agar hmko Person ka data nhi mila toh
         console.log('data updated');
         res.status(200).json(response);
         
    }catch(err){
      console.log(err);
      res.status(500).json({error:"Internal server error"});
    }
  })
router.delete('/:id',async (req,res)=>{
  try {
    const personId = req.params.id; //Extract the id from URL parameter

    const response = await Person.findByIdAndDelete(personId);

    if(!response){
      res.status(404).json({error: 'Person Not Found'}) 
     }
     console.log('data deleted');
     res.status(200).json({message: 'data deleted successfully'});
    
  } catch (err) {
    console.log(err);
      res.status(500).json({error:"Internal server error"}); 
  }
})
  module.exports = router;