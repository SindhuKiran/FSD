import express from 'express'
import { readCourses, readCourseById, updateCourseTitleById, insertCourse } from './operations.js'

const app = express()

app.use(express.json())

app.get('/courses', async (req,res, next)=>{
    try{
        const output = await readCourses()
        res.send(output)
    }
    catch(err){
        next(err)
    }
})

app.get('/courses/:id', async (req,res)=>{
    const id = req.params.id
    const output = await readCourseById(id)
    res.send(output)
})

app.post('/insertCourse', async (req,res)=>{
    const {title, tutor} = req.body
    const output = await insertCourse(title,tutor)
    res.send(output)
})

app.use(errorHandling)

function errorHandling(err,req,res,next){
    console.log("There is some error")
    res.send("There is some internal error")
}

app.listen(3000,()=>{
    console.log("Server has started...")
})