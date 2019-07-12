
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "HOarray.js" in LINE 19 in index.html..}

//              --------------   1. High Order Array Method   -------------------
//THIS IS CALLED AS FUNCTIONAL PROGRAMMING (VERY IMPORTANT)
// Highly recommended for doing iteration with arrays..There are 3 types of them.
//High order array methods takes parameters of "function" which can take multiple - 
// parameters but the first one should be variable you want to use
//These looks much better than other methods.... 

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
// ----- 1.1 ForEach Method ------
// This loops through array
todos.forEach(function (todo) {
    console.log(todo.id);
});

// ----- 1.2. Map Method ------
// This will allow us to create new array from an array 
const todoText = todos.map(function (todo) { //it will return array so that's why we did it
    return todo.Text;
});
console.log(todoText); //it will output array of Text of todos

// ----- 1.3. Filter Method ------
// This will allow us to create a new array baased on condition
const todoCompleted = todos.filter(function (todo) { //return those which are either true or false.. so
    return todo.isCompleted === true; //that's what filter do..
});
console.log(todoCompleted);

//we can also chain up other array methods to it, lets us say we wanna also map to just text as we did before.
const todoCompletedText = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) { // this is chaining up
    return todo.Text;
});
console.log(todoCompletedText); // now it will only give text that is completed(not the last one coz it's false)

// These are High Order Array Methods, See you in next File.