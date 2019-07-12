
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "strings.js" in LINE 19 in index.html..}

// --------  CONCENTATION OF STRINGS   ----------
const name = 'Ahmad Tariq'
const age = 21;
//old way of concentation
console.log('My name is ' + name + ' and I am ' + age);
//new way(Template Strings [in ES6])
console.log(`My name is ${name} and I am ${age} years old `); //use `` back strings and ${} 

// --------  String Properties & Methods  ---------
// 1. Length of String
const s = 'Hello World';
console.log(`The Length of ${s} is ` + s.length); //here lenght is property so No Paranthesis()..
// 2. Upper case Method
console.log(s.toUpperCase());
// same with lower case
// 3. SubString method(usually takes 2 indexes[start and end of substring])
console.log(s.substring(0, 5).toUpperCase()); //gives us Hello.. //also use other methods as uppercase used here
// 4. Split String into array
console.log(s.split('')); //split into 12 arrays including space( )
const w = 'Technology, Computer, Science, code';
console.log(w.split(', ')); // split into 3 arrays

// These are Strings, See you in next File.