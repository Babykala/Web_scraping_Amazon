const http = require('http');
const express = require('express');
const host = 'localhost'
const {amazon} = require('./controller/scrapper');
const productModel=require('./model/product')
const mongo=require('./controller/connect');

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

app.use('/get',getData)

app.listen(process.env.PORT||5000, host, ()=> {
    console.log(`Server running at http://${host}:${process.env.PORT}`);
    main();
})