/*
var dt=new Date()
console.log('hello')
for(i=0;i<1000;i++){
    console.log('Loop')
}
console.log('end')
var diff=new Date()-dt
console.log(diff)
*/

/*
function longTask(millSecondTime){
    dt=new Date()
    while ((new Date-dt) <= millSecondTime){

    }
}

function showEnd(){
    console.log('End')
}


console.log("Started")
setTimeout(showEnd,2000)

console.log("Started")
setTimeout(showEnd,2000)


console.log("Started")
setTimeout(showEnd,2000)
*/

//callback making

var hello=function(data){
    console.log('Data:'+data)
}

var hey=function(callback){
    callback('Abdul Samad')
}

hey(hello)