
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "objectliterals.js" in LINE 19 in index.html..}

// ----- 1. Construct Literal ------
const Person = {
    firstName: 'Ahmad', //Here is semicolon not =
    lastName: 'Tariq',
    Age: '20',
    hobbies: ['Coding', 'Gaming', 'Seasons'], //you can add array too in it
    Address: { //you can add other Literal too in it
        Street: 'ABC',
        City: 'DEF',
        State: 'XYZ'
    }
}
console.log(Person);
console.log(Person.firstName, Person.lastName); //for accessing some specific literal (use .)
// what if we want to print Season which is in hobbies array..
console.log(Person.hobbies[2]);
// what if we want to print city...
console.log(Person.Address.City);

// ----- 2. DeStructuring of Literal ------
const { firstName, lastName, Address: { State } } = Person; //this will pull these out from person object
console.log(firstName);
console.log(State);

// ----- 3. Add Properties in Literal ------
Person.Email = 'ahmad.tariq2528@gmail.com'; // you can add any property in it like this
console.log(Person.Email);

// ----- 4. Arrays of Object Literals ------
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
console.log(todos);
console.log(todos[1].Text); //specific output

// ----- 5. Convert this(Arrays of Object Literals) in JSon ------
//IMPORTANT ONE COZ THATS HOW WE SEND DATA TO OUR SERVERS
//JSon is a data format and it is used in Full Stack Development and APIs when you are sending - 
//data to a server, You usually send & receive it in JSon format..
const todosJSON = JSON.stringify(todos); //this will convert it into JSON
console.log(todosJSON); //see output

// These are Object literal, See you in next File.