var Person={name:"Abdul Samad",age:25,place:"Thrisure", display: function (){
    console.log(this.name)
}}

for(x in Person){
    console.log(Person[x])
}

Person.dob="19-11-2013"

Person.displayAge=function(){
    console.log(this.age)
}


console.log(Person.displayAge())