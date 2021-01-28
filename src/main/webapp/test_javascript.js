//Comment. The computer ignores this
/*
Multiline comment
 */
console.log("Hello there World");

// how to declare variables
let x = 1;
const y = 1;

let variableOne = 5;
let variableTwo = 6;

console.log("VariableOne: " + variableOne + " " + "VariableTwo: "+ variableTwo);

let variableThree = variableOne + variableTwo;
variableThree++;
console.log(variableThree)

function addNumbers(a, b){
    return a+b;
}

console.log("Output; " + addNumbers(22,43))

//function pointers

let otherFunction = addNumbers;
x = otherFunction(22, 56);
console.log("X: "+ x);


//JSON
let personA = {
    name: "Joe",
    email: "joe.mcnally@my.simpson.edu",
};

console.log(personA);
console.log(personA.name);
console.log(personA['name']);

//ES6 class
class PersonB {
    constructor() {
        this.name = "";
        this.email = "";
    }
    fullName(){
        return this.name + " " + this.email;
    };
}
let personB = new PersonB();
personB.name = "Mary";
personB.email = "mary.mary@simpson.edu";
console.log(personB);
console.log(personB.fullName());

//ES5 Class
let personD = {
    firstName: "Joe",
    lastName: "McNally",
    fullName: function (){
        return this.firstName + " "+ this.lastName
    }
};
console.log(personD.fullName())

// loop

for(let i = 0; i < 10; i++){
    console.log(i)
}

let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
let personF = {name: "Joe", email: "joe.mcnally@my.simpson.edu"};

for (let field in personF){
    console.log(field + " = " +personF[field]);
}

let a = 5;
let b = 6;
if(a == b){
    console.log("a==b");
}

a = "Paul";
b = "Paul";

if(a === b){
    console.log("a == b");
}

a =5;
b= 6;
let z = a  + b;

console.log(z);

a = "5";
b = "6";

c = Number(a) + Number(b);
console.log(c)