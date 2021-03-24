var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNumber=Math.floor(Math.random()*100)+1
    let data=req.query.x
    console.log(data)
    res.render('compute',{
        randSolution:`floor applied to ${randomNumber} is ${Math.floor(randomNumber)}`,
        querySolution:` floor applied to ${data} is ${Math.floor(data)}`
    })
})

module.exports=router