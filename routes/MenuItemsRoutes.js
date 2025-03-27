const express = require('express')
const router = express.Router(); //The express.Router() function in Express.js creates a new router object that can handle requests in a modular and organized way
const MenuItems =  require('./../models/MenuItems');

router.post('/', async (req,res)=>{
    try{
        const menudata = req.body // Assuming the request bodyy contains the menu data
  
        //creating menu document(records in sql) using mongoose model
        const newMenuData = new MenuItems(menudata);
  
        //save the menu data to the database
        const response = await newMenuData.save();
        console.log("data saved");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
  })
  router.get('/', async(req,res)=>{
    try{
        const data = await MenuItems.find();
        console.log('data saved');
        res.status(200).json(data)
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })

  router.get('/:taste', async(req,res)=>{
    try{
        const Taste = req.params.taste;
        if(Taste == 'sweet' || Taste == 'sour'|| Taste == 'spicy'){
            const response = await MenuItems.find({taste:Taste});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(400).json({error:'Invalid Taste Type'});
        }
    }catch(error){
         console.log(err);
         res.status(500).json({error:"Internal server error"});    
    }
  })
  module.exports = router;