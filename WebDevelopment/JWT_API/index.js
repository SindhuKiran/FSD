const express = require('express')

const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

const courses = [
    {
        courseTitle: "FSD1",
        courseAuthor: "VB"
    },
    {
        courseTitle: "FSD2",
        courseAuthor: "VB"
    },
    {
        courseTitle: "Python",
        courseAuthor: "Vamshi Bhavani"
    },
    {
        courseTitle: "Frontend1",
        courseAuthor: "Raghavendra Sunil"
    },
    {
        courseTitle: "Frontend2",
        courseAuthor: "Raghavendra Sunil"
    }
]

app.get('/courses', verifyToken, (req,res)=>{
    const authorname = req.payload.data
    res.json(courses.filter(c => c.courseAuthor === authorname))
})

function verifyToken(req,res, next){
    const secret = "b0d9c7787591ca730ffab34d19651c5e757934917a6bd334029ee5f6c162690fd10b27a8917d98976ffe18e839b4f7fd0fd3ee8dd6c85e6426a64aabe3c00131"
    const token = req.headers['authorization']
    console.log(token)
    jwt.verify(token, secret, (err, payload)=>{
        if(err) return res.sendStatus(403)
        req.payload = payload
        next()

    })
}

app.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.pwd
    // const realpwd = db call
    // password === realpwd

    const secret = "b0d9c7787591ca730ffab34d19651c5e757934917a6bd334029ee5f6c162690fd10b27a8917d98976ffe18e839b4f7fd0fd3ee8dd6c85e6426a64aabe3c00131"
    const payload = {data: username}

    const token = jwt.sign(payload, secret)
    res.json({tokenGenerated: token})
})

app.post('/courses/create', (req,res)=>{
    
})

app.listen(3000,()=>{
    console.log("Server Started...")
})