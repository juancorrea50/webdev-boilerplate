//Admin Check example for conditionals and if/else statements
/*
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
*/
//Function basic structure
function hello(name = 'random'){
    alert(`Hello ${name}`)
}
hello('Matilda');
hello();

//Anonymous Function
(function () {
    alert(`hello`);
})
/*This is used as a way to use a function as a parameter like so */
textbox.addEventListener('keydown', function(event) {
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

 