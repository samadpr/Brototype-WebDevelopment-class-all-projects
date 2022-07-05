const express=require('express')
const path=require('path')

const app=express()
/*
app.use(function(req,res,next){
    console.log('start')


    next()
})
*/
//app.use((req,res,next) => console.log('hello') ,next())

app.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,'samplehtml.html'))
    console.log('middle')
    
})

//app.get('/signup',(req,res,next) => res.sendFile(path.join(__dirname,'samplehtml.html') .log('middle') ,next))
/*
app.use(function(req,res){
    console.log('end')
})
*/
//app.use((req,res) => console.log('end'))

app.post('/signup',(req,res) => res.send('account created'))

app.get('/about',(req,res) => res.send('about'))


app.listen(2000,function(){

    console.log(__filename)
    console.log('Server Started')
})


//app.listen(3000,() => console.log(__dirname).log('Server Started'))