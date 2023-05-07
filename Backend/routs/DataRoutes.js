const express = require('express')
const {dataModel} = require('../models/data.model.js')
const dataRoute = express.Router()


dataRoute.get('/',async(req,res)=>{
    const query = req.query;
    console.log(query)
    try{
        let Data = await dataModel.find(query)
        res.send({Data,Total:Data.length})
    }
    catch(err){
        res.send({msg:err.message})
    }
})

dataRoute.post('/postdata',async(req,res)=>{
     
    let payload = req.body;

    try{
       let data = await dataModel.insertMany(payload)
       res.send({msg:'data added sucess !'})
    }
    catch(err){
        res.send({msg:err.message})
    }
})


module.exports = {dataRoute}


