const httpmod=require("node:http")
const server = httpmod.createServer(handleRequests)
const fs = require("node:fs")
function handleRequests(req, res){

    // res.end(req.url)
    // const course = {
    //     "name":"FSD",
    //     "platform":"Entri",
    //     "Tutor":"VB"
    // }

    //  res.writeHead(200, {"Content-Type":"application/json"})
    // res.writeHead(200, {"Content-Type":"text/html"})
    
    //  res.end(JSON.stringify(course))
    //   res.end("<h1>Hello World!!...</h1>")
    if(req.url === '/')
    {
        const content = fs.readFileSync("./base.html", "UTF-8")
        res.end(content)
    }
    else if(req.url === '/info')
    {
        res.end("<h1>Info</h1>")
    }
    else if(req.url === '/about')
    {
        res.end("<h1>About</h1>")
    }
} 


server.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})