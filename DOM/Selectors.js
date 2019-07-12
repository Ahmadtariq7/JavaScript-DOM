
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "Selectors.js" in LINE 19 in index.html..}


//DOM is basically Document Obejct Model, it's like a tree structure of your whole Document

/* // console.log(window);
//window is the parent object of browser, keep in mind. it have function alert in it. so if we do
// alert(1); //you will see pop up alert 1
//we can also do it by 
// window.alert(2); // it will do same
*/

// ---------------   1. Selectors    ------------------
//First I want to talk about selection (selecting things from the DOM). We are going to actually -
//take elements(HTML elements) and put them into variables and stuff like that & work with them..
//So as far as selectors go, we have single element and multi elements selectors.

// -------- 1.1. Single Element  ---------
// So as far as Single Elements, we have Documents.
// 1.1.1 getElementById..
const form = document.getElementById('my-form'); //my form is id we gave it in page.html
console.log(form);
// 1.1.2 querySelector (just works like Jquery for most oart in therm of selecting single element..)
console.log(document.querySelector('.container')); // we can grab any thing by this selector
console.log(document.querySelector('h1'));

// -------- 1.2. Multiple Element  ---------
//    ------  __________________  COMMENT IN ul ITEMS in page.html
//see we wanna select all items of list in html page. so we use multiple ele,ent selector..
console.log(document.querySelectorAll('.items')); //it gives us node list which is similar to array infact-
//we can run array different methods on it(forEach etc).. see how this is useful.
// I WILL RECOMMEND ALWAYS USE querySelectorAll.. but old methods are:
// console.log(document.getElementsByClassName('item')); //old method, by class and it gives us HTML collection - 
// so can't use array methods on it, that's why querySelectorAll highly RECOMMENDED..
// -------- 1.3. Looping through Multiple Element  ---------
const items = document.querySelectorAll('.items');
items.forEach((item) => console.log(item)); //you will see it is looping around..
// -------- 1.4. Manipulating the DOM  ---------
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello"; //see it changes from item1 to hello.
// So what i did is I've taken u which is grabbed from then DOM, than choose the first element child- 
//and change textcontent to hello from item1. so we can change anything we want from javascript.
ul.children[1].innerText = 'Ahmad'; //see we can use innertext for this purpose too.
ul.lastElementChild.innerHTML = '<h1>Here you Go</h1>' //see here we can write HTML using innerHTML

//lets change button, see in html we have class btn.. so 
const btn1 = document.querySelector('.btn');
btn1.style.background = 'red'; //changes button background color..
// we have CSS for this, but from here we can also do this and make this dynamic..

//These are selectors. See you in next lecture


