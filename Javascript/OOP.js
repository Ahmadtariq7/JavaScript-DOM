
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "OOP.js" in LINE 19 in index.html..}

//             --------------   OBJECT ORIENTED PROGRAMMING   -------------------
//we already looked at object literals, however we can construct objects using what's called a -
//constructor function. Now there are 2 ways to do this, one is constructor functions with prototypes -
// and other is ES6 classes which we will do in a bit

//-------------- 1. By Constructor with Parameters   -------------------
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

// ----- 1.1. Add methods to Object ------
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

//   --------------   2. By ES6 method   -------------------
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

// These are Oobject oriented Programming.

// DOM(Document Object Model) is in DOM folder, better open that folder now :)