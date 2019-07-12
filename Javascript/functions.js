
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "functions.js" in LINE 19 in index.html..}

// -------- 1. Functions   -------------------
//functions are created with keyword "function"
function addNums(num1, num2) { //don't add datatype 
    console.log(num1 + num2);

}
addNums(5, 4);
addNums(); //returns NaN which means "Not a Number"

// -----  1.1. Functions with default parameters ------
//  function addNum(num1=2, num2=1) { 
//  console.log(num1 + num2);

// }
// addNum();
// addNum(5,5); //it will overwrite num1 and num2 and give result 10
// in most case, we don't write console.log in body, we usually write return. so,
function multiplyNum(num1, num2) {
    return num1 * num2; //returns 20
}
console.log(multiplyNum(2, 10)); //print 20

// ----- 2. Arrow Functions ------
// These are little but handy and clean things up quite a bit.
// Was introduces in ES6
//If you want to turn function in an arrow function, replace function keyword by any variable(const) and -
// after the name of func. put "=" and after parameters put "=>"{fat arrow}
const addNum = (num1, num2) => { //arrow function
    return (num1 + num2);
}
console.log(addNum(4, 3));
//if we have one parameter only, just write as
const square = (num1) => num1 * num1;
console.log(square(4));
//MOREOVER, it's great using arrow function with forEach. E.g;
// let us write todos again from previous lecture.
const todos = [
    {
        id: 1,
        Text: 'Take out Trash',
        isCompleted: true,

    }, //first obect ends here
    {
        id: 2,
        Text: 'Go to Gym',
        isCompleted: true,

    },
    {
        id: 3,
        Text: 'Bring files from drawer',
        isCompleted: false,

    },
]
todos.forEach((todo) => console.log(todo)); //see, we used it here...see output

// These are Functions, See you in next lecture.