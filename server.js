const express = require("express")
const app = express()

app.set("view engine","ejs")

app.use(express.static('.'))

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(3000,()=>{
    console.log("Server is running!")
})