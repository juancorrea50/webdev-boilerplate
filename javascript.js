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

//DOM manipulations
/* DOM(Document Object Model) refers to the relationship between all the elements in a webpage or a tree of nodes(children with a parent) 
*/
//SEE HTML FOR EXAMPLE OF CHILDREN AND PARENT
//AN HTML FILE IS ESSENTIALLY A DOM IN JAVA. THIS ALLOWS FOR THE HTML ON A WEBPAGE TO BE MANIPULATED WITH JAVASCRIPT
/* A NODE IS AN ELEMENT OF AN HTML ASSIGNED TO A VARIABLE IN JAVASCRIPT */

//You can also use firstElementChild and lastElementChild
console.dir(container.firstElementChild);
//selects the first child of #container => .display

console.dir(controls.previousElementSibling);
//selects the prior sibling => .display

/*
    Simplifying it, you are essentially directing the program node to node by the node's relationship to the siblings or parent
 */
//The querySelector function allows an element to be selected and assigned to a variable in javascript to be manipulated with javascript.
const container = document.querySelector('#container');
//selects the #container div
const controls = document.querySelector('.controls');
//selects the .controls div
//There is querySelectorAll that returns a nodelist of all the nodes that have the same selector that was entered into the parameters.
const allLists = document.querySelectorAll('li');
//returns a nodelist of all the 'li' list elements
/*
    All nodelists are not Arrays but can be converted to one by using Array.from(allLists) or using the spread operator(...allLists)
*/

//Creating an element allows for more interactivity

const div = document.createElement('div');
//Creates a div elements connected to the div variable

//However this DOES NOT add it to the DOM. It only creates it in memory so that styles can be added to it before it is applied.

//The new child can be added into the DOM and reflected on the html page with one of the following methods.

container.appendChild(div);
//This function adds the div created as a child to #container. A way to look at it is like this: parentNode.appendChild(childNode)
container.insertBefore(div, controls) 
/*This function adds the div created before controls in the #container siblings. 
    A way to look at it is like this: parentNode.insertBefore(newNode, referenceNode)<referenceNode being one of parentNode's children>
*/
//A node can also be removed by the following
container.removeChild(div);
//This removes div as a child of #container

//Elements can also be altered 
const div = document.createElement('div');

div.style.color = 'blue';
//or
div.style.cssText = 'color: blue; background: white;';
//adds more than one styling to the div created
//or
div.setAttribute('style', 'color: blue; bnackground: white;');
//same as the other but setAttribute allows for more attributes to be changed
/*
    Note: kebab-cased CSS rule turns into camelCase rule when accessing a css property
    background-color == backgroundColor
*/
div.style.backgroundColor //Correct syntax when accessing the style of an element from js

//The attributes of a node can also be changed
div.setAttribute('id', 'theDiv');
//sets the id of the div to #theDiv
div.getAttribute('id');
//returns the id of the div node
div.removeAttribute('id');
//removes the id of the div node

//In order to add a class it is preferred to use classList
div.classList.add('new');
//adds class 'new' to the div node
div.classList.remove('new');
//removes 'new' class from div node
div.classList.toggle('active');
//toggle adds and removes class 'active' from the div node
/* toggle is the standard as it is cleaner than adding or removing inline CSS */

//Text content can be added via textContent
div.textContent = 'Hello World!';
//creates a text node containing 'Hello World!' and inserts it in div
/* innerHTML can be used however it raises security concerns as anyone can then access the DOM and manipulate it */

//Events are things like button clicks and hovering the mouse over an element
onclick onmousedown
/*Not a comprehensive list */

//Event listeners are prefered to the above but are still seen today

//All of these use functions to add a purpose to buttons or nodes on a webpage



/*
    REFER TO OFFLINE FOLDER OF ./dom-manipulation IN WSL UBUNTU FOR A COMPLETED EXERCISE OF THIS AND EVENT LISTENERS
*/