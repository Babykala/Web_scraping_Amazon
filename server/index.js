const express = require('express');
const {amazon} = require('./controller/scrapper');
const productModel=require('./model/product')
const mongo=require('./controller/connect');
const cors=require('cors');
require('dotenv').config();
const app = express();


const main = () =>{
    console.log('Running amazon');
    amazon();
}

const getData=async(req,res)=>{
    try{
        var data=await productModel.find();
        res.send(data);
        
    }catch(err){
        console.log(err)
    }
}

app.use(cors())
app.use('/get',getData)

const port=process.env.PORT||5000
app.listen(port,()=> {
    console.log(`Server running at ${process.env.PORT}`);
    main();
})
