function Person(name, age){
    this.name = name;
    this.age = age;
    this.tellMeAboutPerson = function(){
        console.log(this.name + " " + this.age)
    }
}

var john = new Person('john', 25)
 console.log(john)

 Person.prototype.tellMeAboutPerson2 = function(){
     console.log(this.name+ " " + this.age)
 }