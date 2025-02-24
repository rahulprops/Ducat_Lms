import express from 'express'
import  'dotenv/config.js'
import cors from 'cors'
import dbConnect from './server/database/db.js'
import adminRoute from './server/router/admin.routes.js'
const app=express()
const port=process.env.PORT || 4000

//! middleware
app.use(express.urlencoded({extended:true})) 
app.use(express.json())
app.use(cors())
app.set("view engine","ejs")


//! adminroute
app.use("/",adminRoute)

app.all("*",(req,res)=>{
  res.render("404")
})


//! server start
app.listen(port , ()=>{
    dbConnect()
    console.log(`server is running on port http://localhost:${port}`)
}) 