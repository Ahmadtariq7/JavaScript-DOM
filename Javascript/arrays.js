
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "arrays.js" in LINE 19 in index.html..}

// ----- 1. Construction of array ------
//old method
const number = new Array(1, 2, 3, 4, 5);
console.log(number);
//new method and which is usually used..
const Fruits = ['Apples', 'Oranges', 'Mangoes', 'Grapes', 10, true];
console.log(Fruits);
//want to add at some index..
Fruits[6] = 'Bananas';
console.log(`After adding Bananas: ${Fruits}`);
//using push method(add at the end of array)..
//using unshift method(add at the start of array)..
Fruits.unshift('Strawberries'); //one of my fav fruit xD
console.log(`After adding Strwaberry: ${Fruits}`);
Fruits.push('Pear');
console.log(`After adding Pear: ${Fruits}`); 

// ----- 2. Access Members of array ------
console.log(Fruits[0]);
console.log(Fruits[3]);

// ----- 3. Take Last Member of array ------
Fruits.pop(); // paranthesis() are always there after methods..
console.log(Fruits);

// ----- 4. Check that it is array or not ------
console.log(Array.isArray(Fruits)); //it will give true or false

// ----- 5. Index of member of Array ------
console.log(Fruits.indexOf('Oranges'));

// These are Arrays, See you in next File.