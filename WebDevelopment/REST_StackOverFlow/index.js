const express = require('express')
const app = express()

const questions = [
    {
        question:"how to install python1",
        slug:"How-to-install-python1",
        votes:3,
        views:10,
        tags:"python,querey,pip"
    },
    {
        question:"how to install python2",
        slug:"How-to-install-python2",
        votes:3,
        views:10,
        tags:"python,query,pip"
    },
    {
        question:"how to install vs code",
        slug:"How-to-install-vs-code",
        votes:9,
        views:15,
        tags:"vs code, java script"
    }
]

const users = [
    {
        name:"VB",
        followers:1000,
        location:"Hyderabad"
    },
    {
        name:"Sindhu",
        followers:500,
        location:"Hyderabad"
    },
    {
        name:"Nayana",
        followers:800,
        location:"Bangalore"
    }
]

const tags = [
    {
        keyword:"javascript",
        description:"For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc."
    },
    {
        keyword:"python",
        description:"Python is a dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is officially out of support as of 2020-01-01. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please include it in the tags."
    },
    {
        keyword:"C#",
        description:"C# is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which include .NET, .NET Framework, .NET MAUI, and Xamarin among others. Use this tag for questions about code written in C# or about C#'s formal specification."
    }
]

app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/questions',(req,res)=>{
    res.send(questions)
})

app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug = req.params.slug
    questions.map(obj=>{
        if (obj.slug === slug){
            res.send(obj)
        }
        
    })
    res.send("Question not found")
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/tags',(req,res)=>{
    res.send(tags)
})

app.get('/jobs/companies',(req,res)=>{
    res.send("companies")
})

app.listen(1234, ()=>{
    console.log("Listening....")
}) 