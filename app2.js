const express=require('express');
const bcrypt=require('bcrypt');

const app=express();

app.get("/",(req,res)=>{
  bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash("Omnamahshivay#21",salt,(err,hash)=>{
      console.log(hash);
    });
  });
});

app.listen(3000);