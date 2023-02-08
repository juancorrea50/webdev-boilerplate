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