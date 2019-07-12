
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "variables.js" in LINE 19 in index.html..}

//   JS is usually outputed on the console of the brwoser. so 
//  ------------   console info  -----------
// cocnsole.log is for outputing on browser console..
// console.log('Hello World'); //will print Hello World on console
// console.error('This is an error :P'); //see output on console
// console.warn('this is the warning'); 

// MOVING TOWARDS VARIABLES..
//var is not used anymore(it is globally scoped). Now let(you can reasign value) and 
//const(can't be reasigned) are used(as they both are block scoped)
let age = 10;
console.log('Age is', age);
age = 20;
console.log('Age is', age);
const height = 112;
console.log('Height is', height);
height=124; //error
console.log('Height is', height); // it will give error, as it variable(height) is not resignable...

// These are variables, See you in next lecture.