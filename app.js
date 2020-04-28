const express=require("express"); 
const app=express(); 


app.use((req,res,next)=>{

    res.status(200).json({
        message:"Hello there, installing nodemon"
    })
})

module.exports=app