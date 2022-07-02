function Person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("Name :"+this.name+" Age :"+this.age+" Place :"+this.place)
    }

}

var Samad=new Person("Samad",19,"kunnamkulam")
var Ajmal=new Person("Ajmal",20,"chunagamveli")


Samad.display()
Ajmal.display()