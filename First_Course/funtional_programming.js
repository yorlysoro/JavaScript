function Callback(val){
    console.log(val);
}
var animals = ['dogs', 'cat', 'horse', 'kangaroo']
animals.forEach(Callback)

function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var animal = JSON.parse(this.responseText)
            console.log(animal)
        }
    }
    xhttp.open("GET", "animal.json", true)
    xhttp.send()
}

setTimeout(function(){
    console.log("Hello World")
}, 5000)

console.log("waiting for hello on console")

function add(x,y){
    return x + y;
}

console.log(add)

var substrac = function(x,y){
    return x - y;
}
console.log(substrac)

function doIf(condition, func){
    if(condition){
        func();
    }
}

const a = "Apple";

doIf(a===1, sayAis1)
doIf(a==="Apple", sayAisApple)
doIf(a==="animal", sayAisAnimal)

function sayAis1() { console.log("A is 1") }
function sayAisApple() { console.log("A For Apple") }
function sayAisAnimal() { console.log("A is Animal") }

function ifElse(condition, func1, func2){
    if(condition){
        func1()
    }else{
        func2()
    }
}

console.log(this)

var person = {
    name : "Awais",
    email: "awais@gmail.com",
    DOB : "01/01/2000",
    profession : "Software Developer",
    Subscription : function(){
        console.log("The person name is " + this.name + " " + "Person profession is: "
        + this.profession)
    }
}
person.Subscription()