// console info
// cocnsole.log is for outputing on browser console..
// console.log('Hello World');
// console.error('This is an error :P');
// console.warn('this is the warning');


//                  ---------------   1. VARIABLES    ------------------
//var is not used anymore(it is globally scoped). Now let(you can reasign value) and 
//const(can't be reasigned) are used(as they both are block scoped)
let age = 30;
console.log('Age is', age);
age = 40;
console.log('Age is', age);
const height = 112;
console.log('Height is', height);
// height=124;
// console.log('Height is', height); // it will give error, as it variable(height) is not resignable...


//                  --------------   2. DATA TYPES   -------------------
// We have String, Numbers, Boolean, null, undefined, Symbol(Symbol added is ES6)
const name = 'Ahmad Tariq';
const Age = 21;
const rating = 4.5;
const isCool = true;
const x = null; //it means it's empty(x is variable but it's empty..)
const y = undefined; //which we can define later..
let z; // line 25 and 26 are same, both are undefined
//testing them..
console.log(typeof name);
console.log(typeof Age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x); //it's object type.. you can see on google..it says it bogus(not true)
console.log(typeof y);
console.log(typeof z);

// -------- 2.1. CONCENTATION OF STRINGS   ----------
//old way
console.log('My name is ' + name + ' and I am ' + Age);
//Template Strings (New way to do it in ES6)
const hello = `My name is ${name} and I am ${Age} years old`;
console.log(hello);

// -------- 2.2. String Properties & Methods  ---------
// 1. Length of string
const s = 'Hello World!';
console.log(`The length of variable ${s} is ` + s.length);
// 2. Upper case Method
console.log(s.toUpperCase());
// same with lower case
// 3. SubString method(usually takes 2 indexes[start and end of substring])
console.log(s.substring(0, 5).toUpperCase()); //gives us Hello.. //also use other methods as uppercase used here
// 4. Split String into array
console.log(s.split('')); //split into 12 arrays including space( )
const w = 'Technology, Computer, Science, code';
console.log(w.split(', ')); // split into 3 arrays

//                       ------------   3. ARRAYS    ---------------
//Arrays are basically variables that hold multiple values.
// -----    3.1. Construction of array ------
//old method
const number = new Array(1, 2, 3, 4, 5);
console.log(number);
//new method and which is usually used..
const Fruits = ['Apples', 'Oranges', 'Mangoes', 'Grapes', 10, true];
console.log(Fruits);
Fruits[6] = 'Bananas';
console.log(`After adding Bananas: ${Fruits}`);
//using push method(add at the end of array)..
//using unshift method(add at the start of array)..
Fruits.unshift('Strawberries'); //one of my fav fruit xD
console.log(`After adding Strwaberry: ${Fruits}`);
Fruits.push('Pear');
console.log(`After adding Pear: ${Fruits}`);

// -----    3.2. Access Members of array ------
console.log(Fruits[0]);
console.log(Fruits[3]);

// -----    3.3. Take Last Member of array ------
Fruits.pop(); // paranthesis() are always there after methods..
console.log(Fruits);

// -----    3.4. Check that it is array or not ------
console.log(Array.isArray(Fruits)); //it will give true or false

// -----    3.5. Index of member of Array ------
console.log(Fruits.indexOf('Oranges'));


//                  --------------   4. OBJECT LITERALS   -------------------
// -----    4.1. Construct Literal ------
const Person = {
    firstName: 'Ahmad', //Here is semicolon not =
    lastName: 'Tariq',
    Age: '20',
    hobbies: ['Coding', 'Gaming', 'Seasons'], //you can add array too in it
    Address: { //you can add other Literal too in onw
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

// -----    4.2. DeStructuring of Literal ------
const { firstName, lastName, Address: { State } } = Person; //this will pull these out from person object
console.log(firstName);
console.log(State);

// -----    4.3. Add Properties in Literal ------
Person.Email = 'ahmad.tariq2528@gmail.com';
console.log(Person.Email);

// -----    4.4. Arrays of Object Literals ------
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

// -----    4.5. Convert this(Arrays of Object Literals) in JSon ------
//IMPORTANT ONE COZ THATS HOW WE SEND DATA TO OUR SERVERS
//JSon is a data format and it is used in Full Stack Development and APIs when you are sending - 
//data to a server, You usually send & receive it in JSon format..
const todosJSON = JSON.stringify(todos); //this will convert it into JSON
console.log(todosJSON);


//                  --------------   5. LOOPS   -------------------
// -----    5.1. For Loop ------
for (let i = 0; i < 5; i++) { //same as in other languages..
    console.log(`For loop number: ${i}`);
}

// -----    5.2. While Loop ------
let i = 0;
while (i < 5) {
    console.log(`While loop number: ${i}`);
    i++
}

// -----    5.3. Todos(which we created eariler) with For Loop {LOOP THROUGH ARRAY} ------
//First Method
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].Text);
}
//Other Method(FOR-OF LOOP) BEST WAY 
for (let todo of todos) { //todo is variable and todos is array defined above
    console.log(todo);
}
for (let todo of todos) {
    console.log(todo.Text);
}

//                  --------------   6. High Order Array Method   -------------------
//THIS IS CALLED AS FUNCTIONAL PROGRAMMING (VERY IMPORTANT)
// Highly recommended for doing iteration with arrays..There are 3 types of them.
//High order array methods takes parameters of "function" which can take multiple - 
// parameters but the first one should be variable you want to use
//These looks much better than other methods.... 

// -----    6.1. ForEach Method ------
// This loops through array
todos.forEach(function (todo) {
    console.log(todo.id);
});

// -----    6.2. Map Method ------
// This will allow us to create new array from an array 
const todoText = todos.map(function (todo) { //it will return array so that's why we did it
    return todo.Text;
});
console.log(todoText); //it will output array of Text of todos

// -----    6.3. Filter Method ------
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


//                  --------------   7. Conditionals   -------------------
// -----    7.1. IF ELSE condition ------
let num = 4;
if (num === 10) { // == matches number only and if x is '10' it will give true but === matches data type also.
    console.log(`num is 10`);
} else if (num < 10) {
    console.log(`num is less than 10`)
} else {
    console.log(`num is greater than 10`)
}
// or is ||, and is && 

// -----    7.2. Ternary Operators ------
// These are basically shorthand if statements & they are used alot to assign variables based on condition.
const check = 10;
//imagine we want to create variable color & it based on condition that x is ______
const color = check > 10 ? 'red' : 'black'; // ? is ternary operater which represent "than" & : represents "else"
console.log(color); //returns black

// -----    7.3. Switches ------
// It's another way to evaluate conditions..
switch (color) {
    case 'red':
        console.log(`color is red`);
        break;
    case 'black':
        console.log(`color is black`);
        break;
    default:
        console.log(`color is neither red nor black`)
}


//                  --------------   8. Functions   -------------------
//functions are created with keyword "function"
function addNums(num1, num2) { //don't add datatype 
    console.log(num1 + num2);

}
addNums(5, 4);
addNums(); //returns NaN which means "Not a Number"

// -----    8.1. Functions with default parameters ------
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

// -----    8.2. Arrow Functions ------
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
todos.forEach((todo) => console.log(todo)); //see, we used it here...see output


//                --------------   9. OBJECT ORIENTED PROGRAMMING   -------------------
//we already looked at object literals, however we can construct objects using what's called a -
//constructor function. Now there are 2 ways to do this, one is constructor functions with prototypes -
// and other is ES6 classes which we will do in a bit

//                --------------   9.1. By Constructor with Parameters   -------------------
//Constructor Function
function Student(firstName, lastName, DOB) { //Must be first letter capital coz it's object and in parameters add properties in it.
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = DOB;
}
//Now Instantiate Object Student
const Student1 = new Student('Ahmad', 'Tariq', '20-7-1998'); //crearting instance of ot via new  
const Student2 = new Student('ABCD', 'EFG', '1-1-2000'); 
console.log(Student1); 
console.log(Student2);
console.log(Student2.firstName); // can output any property too

// -----    9.1.1. Add methods to Object ------
function Employee(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;    
    }
    this.getId = function() {
        return id;
    }
}
const Employee1 = new Employee('Ahmad', 'Tariq', '6113');
const Employee2 = new Employee('ABCD', 'EFG', '1234'); 

console.log(Employee1.getFullName()); // method getFullName called
console.log(Employee1.getId()); // method getId called

// Just look another thing.. try to print 
console.log(Employee2); //you will see methods prototypes are also there, so how to get rid of them.? 
//well just write methods outside of constructors. have a look below..
function Teacher(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
} 
//write methods here, after constructing and before Instantiating.. BY using prototype keyword
Teacher.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
Teacher.prototype.getDOB = function() {
    return this.dob;
}
const Teacher1 = new Teacher('William', 'Doe', '10-2-1980');
//now see printing Teacher
console.log(Teacher1);
//and we can print methods by
console.log(Teacher1.getFullName());
console.log(Teacher1.getDOB());

//                --------------   9.2. By ES6 method   -------------------
// with ES6 classes were added to JavaScript, Now it's important to know that with classes it do the -
//same thing as we do this constructors(ES5 Method) it's add methods to the prototypes.
//However, it's what's known as SYNTACTIC Sugar which means it's a prettier way to write it but it does - 
// the same stuff under the Hood..
//THIS IS BEST WAY, I RECOMMEND THAT CREATE OBJECTS THIS WAY :) if you like C++ xD

//Use keyword "class" to create class..
class Book {
    constructor(title, author, pages) { //keyword constructor, and put same things as we did in function above
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    //any method we wanna add in thi class, we can put it here without keyword prototype
    getTitle() {
        return `Title is: ${this.title}`;
    }
    getPagesNo() {
        return `Pages are: ${this.pages}`;
    }
}
const Book1 = new Book('Forty Rules of Love', 'Elif Shafak', '892');
console.log(Book1);
console.log(Book1.getTitle());
console.log(Book1.getPagesNo());
// you see it's the same thing, but it's easy to write and read this way...

// DOM is in dom.js, better open that file now :)

//                                   THANKS AND HAPPY LEARNING 
