//My Name
var myName = "Rakesha McIntyre"


// Number of US states
const numberOfStates = 50;

//Add problem
var sum = 5 + 4;

//Greeting
function sayHello()
{
alert("Hello World");
}
sayHello();



//Array of Favorite Vegetables
let favVeggies = ['green beans', 'tomatoes', 'corn', 'potatoes'];

for (let i = 0; i < favVeggies.length; ++i) {
    console.log(favVeggies[i]);
}

//Age check. Are you 21?
function checkAge(name, age) {
    if (age < 21) {
        console.log('Sorry ' + name + ', you arent old enough to view this page!');
    } else {
        console.log('Welcome ' + name);
    }
 }

let checkUser = [{
    title: 'User1',
    name: 'Bria',
    age: 16 
}, {
    title: 'User2',
    name: 'Wayne',
    age: 32
}, {
    title: 'User3',
    name: 'Tiaira',
    age: 29
}, {
    title: 'User4',
    name: 'Leandra',
    age: 18
}, {
    title: 'User5',
    name: 'Rolo',
    age: 9
}, {
    title: 'User6',
    name: 'Andre',
    age: 33
}];

checkUser.forEach((checkUser) => {
    checkAge(checkUser.name, checkUser.age);
});
