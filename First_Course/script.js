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

var person3 = {}
person3['name'] = 'Awais';
console.log(person3)

function cal(a, b, opt){
    switch(opt){
        case '+' :
            return console.log('Addition: ' + (a+b))
        case '-':
            return console.log('Subtract: ' + (a-b))
        case '*':
            return console.log('Multiply: ' + (a*b))
        case '/':
            return console.log('Devide: ' + (a/b));
        default:
            return console.log('Operator is not right')
    }
}

cal(5,5,'+')
cal(4,5,'-')

const buttons = document.getElementsByTagName("button")
for(var i = 0; i < buttons.length; i++){
    const button = buttons[i];
    button.addEventListener("click", function(){
        console.log("Button " + i + " pressed")
    })
}

var a = Math.random(100)
console.log(a)

var date = new Date(2022,12,31,23,59,59)
console.log(date)

var a = '2 + 2'
var b = new String("2+2")
console.log(eval(a))
console.log(eval(b))
