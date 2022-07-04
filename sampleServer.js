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

http.createServer(function(req,res){
    
    fs.readFile('samplehtml.html',function (err,data){
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(data)
        res.end()    
    })
    
}).listen(5000)