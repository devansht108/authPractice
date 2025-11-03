const express=require('express');
const bcrypt=require('bcrypt');

const app=express();

app.get("/",(req,res)=>{
  bcrypt.compare("Omnamahshivay#21","$2b$10$FRq.VXBzJNV64L5hCyYdR.lY/l8vQr7WDd1cZKmILCA712zl.dqdi",(err,result)=>{
    console.log(result);
  })
})

app.listen(3000);