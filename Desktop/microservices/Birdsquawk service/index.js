const express=require('express')
const app=express()
const {randomBytes}=require('crypto')
const port=3000


const database=[]

app.use(express.json())

app.post('/my-first-post',(req,res)=>{
    const postId=randomBytes(8).toString('hex')
    const {text}=req.body
    database[postId]={postId,text}
    console.log(database)
    res.status(201).json({
        message:'success',

    })

})

app.listen(port,()=>{
    console.log(`express app is running on port ${port}`)
})