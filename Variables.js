/*
Variables क्या होते हैं? Variables एक container की तरह होते हैं जो डेटा को store करते हैं। 
JavaScript में variables declare करने के 3 तरीके हैं:

1. var
2. let
3. const

Variables का उपयोग डेटा को store करने, manipulate करने और access करने के लिए किया जाता है।
*/


// var का उदाहरण

var name = "Anuj";
var age = 25;

// let का उदाहरण

let city = "Kanpur";
let isStudent = true;

// const का उदाहरण

const PI = 3.14;
const BirthYear = 1998;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Variables के प्रकार // 

/* 
1. Number
2. String
3. Boolean
4. Object
5. Array
6. Null
7. Undefined
8. Symbol

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Variables के प्रकार का उदाहरण

let marks = 95;
let percentage = 85.5;

let firstName = "Anuj";
let message = "Hello, World!";

let isPass = true;
let isFall = false;

let colors = ["Red", "Green", "Blue"];
let numbers = [1, 2, 3, 4, 5];

let student = {
    name: "Anuj",
    age: 25,
    city: "Kanpur"
}

let kuchBhi;
//console.log(kuchBhi); // Undefined

let nothing = null; // Null value

let symbolobject = Symbol("ID"); // Symbol type

let badiValue = 12345678901234567890n; // BigInt type

// Variables के उपयोग का उदाहरण
    

console.log(symbolobject);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////