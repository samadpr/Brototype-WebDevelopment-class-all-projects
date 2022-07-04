/*
var http=require('http')

http.createServer(function(req,res){
    res.write('Abdul Samad')
    res.end()
}).listen(7000)

/*
function server(req,res){
    res.write('Abdul Samad')
    res.end()
}
*/

//html calling

var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer(function(req,res){

    var q=url.parse(req.url,true)
    //console.log(q.pathname)

    if(q.pathname==='/'){

    
    fs.readFile('samplehome.html',function (err,data){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(data)
        res.end()    
    })
}else if(q.pathname==='/signup'){
    fs.readFile('samplehtml.html',(err,data) => {
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(data)
        res.end()
    })
    
}else if(q.pathname==='/signupaction'){

    console.log(q.query.firstname)
    res.writeHead(200,{'Content-type':'text/html'})
    res.write('<h1>'+'Hi '+q.query.firstname+'</h1>')
    res.end()
}else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('error')
    res.end()
}

}).listen(5000,() => console.log("Server Started"))