//Admin Check example for conditionals and if/else statements

let userName = prompt("Who's there?", '');

if(userName === 'Admin'){
    let pass = prompt('Password?', '');

    if(pass == 'TheMaster'){
        alert('Welcome!');
    } else if(pass == '' || pass == null){
        alert('Canceled');
    } else {
        alert('User Not Found');
    }
} else if(userName === '' || userName === null){
    alert('Canceled');
} else {
    alert("I don't know you");
}

//Student Grade Switch example

let grade = prompt('What is the grade?', '');
//setting the expression to true will evaluate the statement that is true FIRST
switch(true){
    case grade >=90:
        alert(`Your grade was a ${grade} so congratulations you have an A`);
        break;
    case grade >=80:
        console.log(`B`);
        break;
    case grade >= 70:
        console.log(`C`);
        break;
    case grade >= 60:
        console.log(`D`);
        break;
    default:
        console.log(`F`);
    

}
//Season example for switch statement with multiple cases with the same statement result

const month = new Date().getMonth();

switch(month) {
    case 0:
    case 1:
    case 2:
        console.log(`Winter`);
        break;
    case 3:
    case 4:
    case 5:
        console.log(`Spring`);
        break;
    case 6:
    case 7:
    case 8:
        console.log(`Summer`);
        break;
    case 9:
    case 10:
    case 11:
        console.log(`Autumn`);
        break;
    default:
        console.log(`Something went wrong`);
}

//Ternary operator example
let isBirthday = true;
const greeting = isBirthday
? 'Happy Birthday!!'
: 'Greetings!'

console.log(greeting);

//Function basic structure
function hello(name = 'random'){/*<--- Set a default parameter like this to avoid errors */
    alert(`Hello ${name}`)
}
hello('Matilda');
hello();

//Anonymous Function
(function () {
    alert(`hello`);
})
/*This is used as a way to use a function as a parameter like so */
textbox.addEventListener('keydown', function(event) {/*<--- 'event' refers to the action of the keydown event */
    console.log(`You pressed "${event.key}"`)
});
/*Depending on the dev an anonymous function can be used in this case or a premade function to use when a key is pressed */

//Arrow function example
(event) => {
    console.log(`You presssed ${event.key}`);
}
//Arrow function in previous addeventlistener function example
textbox.addEventListener('keydown', (event) => {
    console.log(`You pressed ${event.key}`);
})

/*If the function has only one line in the curly brackets they can be removed */
textbox.addEventListener('keydown', (event) => 
    console.log(`You pressed ${event.key}`)/*<---From here */
);/*<--- To here */
/**Side note* if done this way move the semicolon from the statement to the outside of the function call */

/*Also if the function only takes one parameter then the parenthesis can be removed */
textbox.addEventListener('keydown', event => 
    console.log(`You pressed ${event.key}`)
);
//Scope example

let x = 1;/*<--- Global */
function output(value){
    /*function to print variable into the console or show as a para element */
}

function a(){
    const y = 2;/*<--- local of the function */
    output(y);
}
function b(){
    const z = 3;/*<--- Variable cannot be called from the global scope */
    output(z);/*<--- can be shown by using a function to call the value */
}
//Function variables cannot be called from outside the function itself because of it's scope.

//ARRAYS (oh boi...)

//Syntax
const cars = ['Saab', 'Volvo', 'BMW']; /*<-- Known as an array literal. Line breaks are not important. Also always use const
keyword to create an array*/

//Can also create an array then add elements
const cars =[];
cars[0]='Saab';
cars[1]='Volvo';
cars[2]='BMW';
//Other way to type an array
const cars = new Array('Saab', 'Volvo', 'BMW');
//Preferred to use array literals

/*ARRAY INDEXES START AT 0 */

//Change the index of a specific array
cars[0] = 'Opel';//<-- This changes the first index of cars to Opel

//Refer to the array itself and it's contents
console.log(cars);//<-- This prints the array contents to the console log
//Arrays are objects
console.log(typeof cars);//<-- Returns object
//Array properties and methods
cars.length//<-- Returns the number of elements
cars.sort()//<-- Sorts the array
//Accessing the first and last array
let car = car[0];//<-- First Element
let car = car[cars.length -1];//<-- Last Element
//Looping Array elements
for(let i =0; i<cars.length;i++){
    cars[i] = 'BLANK';
}
//Or the forEach() function can do the same
cars.forEach('BLANK');// same function as the previous example
//Can also be used with a function
cars.forEach(blank);

function blank(value){
    value = '';
}
//Same as the previous example just using a function