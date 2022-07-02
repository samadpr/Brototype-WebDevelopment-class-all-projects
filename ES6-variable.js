/*  //ES6
var num=10

var num=20

// SyntaxError: Identifier 'hello' has already been declared
// this is the use of let

let hello=30

let hello=30

console.log(hello)
*/

//scope

/*
function hello(){
    var i=0
    let hoy=100
    if(i===0){
        var hey=20
        let hoy=30
        var i=200
    }
    console.log(hey)
    console.log(hoy)
    console.log(i)


    function sample(){
        var i=300
    }
    sample()
    console.log(i)
}


hello()
*/

//const
/*
const hello=100

//hello=200

const hey=['Samad','ajmal','sabith']

hey.push('shehin')

console.log(hey)
*/

//Default paramater

/*
function hello(num1=100,num2){
    console.log(num1+num2)
}

hello(undefined,20)
*/

/*
class Hello{
    constructor(num1,num2){
        this.num1=num1
        this.num2=num2
    }
    hello(){
        console.log('Hello Friends :'+(this.num1+this.num2))
    }
}

let hey=new Hello(10,20)
hey.hello()
*/

//inheritance

/*
class sample{
    sampleHello(){
        console.log('This is sample Hello')
    }
}


class Hello extends sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
    }
    hello(){
        console.log('Hello Friends :'+(this.num1+this.num2))
    }
}

let hey=new Hello(10,20)
hey.hello()
hey.sampleHello()
*/

//Arrow Function

function add(a,b){
    return a+b
}

let add1=(a,b) => {return a+b}


console.log(add1(10,20))