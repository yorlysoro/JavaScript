console.log("We Understand the console!!");

//Variables
var abc = 5;
var a = 5;
var b = 10;
var c = 6;
console.log(a)
console.log(b)
console.log(c)

/* comments 
multi lines*/

//One Line Comments

var a = 567896;
var b = 2.89;
var myname = "Yorlys";
var file = true;

console.log(a);
console.log(b);
console.log(myname)
console.log(file)

var nullValue = null;
var undefinedValue = undefined;
console.log(nullValue);
console.log(undefinedValue);

a++;
console.log(a)
a+=37;
console.log(a)
a--;
console.log(a);
a-=87;
console.log(a);
a*=5;
console.log(a);
a/=4;
console.log(a);
a+=b;
console.log(a);

a = 9;
b = 10;
c = 15;

if (a < b && b < c){
    console.log("A less than b")
} else if(c > b){
    console.log("C is greater than b");
} else{
    console.log('A is not less than b')
}

var array = ["milk", "banana", "meat", "cooking"]
console.log(array)

//Functions
function log(message){
    console.log(message)
}

log("Hello Form log")

function cal(a,b){
    var result = a + b;
    return result
}

log(cal(2,2))

function myFunction(a,b){
    return a * b;
}
log(myFunction(2,2))

for(var i=0;i < 10; i++){
    console.log(i)
}

var i = 0
while(i < 10){
    console.log(i)
    i++
}

var i = 0
do{
    console.log(i)
    i++
}while(i < 5);

//
var person = {}
person.name = "Tom"
person.age = 25
person.gender = "male"
person.hobbies = "Playing Soccer"
console.log(person)

var person2 = {
    name : "Bob",
    age : 25,
    gender : "male",
    hobbies : "Listen Music"
}
console.log(person2)