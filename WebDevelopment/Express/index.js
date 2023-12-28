const express = require("express")

const path = require('node:path')

const app = express() //Initialize the app

app.get('/', sayHello, sayHi)

function sayHello(req, res, next){
    res.send("Hello")
}

function sayHi(req, res, next){
    res.send("Hii")
}



// app.get('/', handleRoot)
// app.get('/info', handleInfo)
// app.get('/about', handleAbout)
// app.get('/sayHi/:name', handleVar)

// function handleVar(req,res){
//     let name = req.params.name
//     res.send("Hi" + " " + name)
   
// }

// function handleRoot(req, res){
//     // res.send("Root Route")
//     // res.sendFile('D:/Entry_Learning/FSD/WebDevelopment/Express/index.js')
//     res.sendFile(path.join(__dirname,'rootHtml.html'))
// }
// function handleInfo(req, res){
//    // res.send("Info Route")
//    res.json({"name":"FSD", "tutor":"VB"})

// }
// function handleAbout(req, res){
//     res.send("About Route")

// }
app.listen(3000,()=>{
    console.log("server is running")
})                   //Start the server