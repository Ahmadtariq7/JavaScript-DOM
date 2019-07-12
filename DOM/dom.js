//DOM is basically Document Obejct Model, it's like a tree structure of your whole Document

/* // console.log(window);
//window is the parent object of browser, keep in mind. it have function alert in it. so if we do
// alert(1); //you will see pop up alert 1
//we can also do it by 
// window.alert(2); // it will do same
*/

//                  ---------------   1. Selectors    ------------------
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


//                  ---------------   2. Events    ------------------
// -------- 2.1. Mouse Event  ---------
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => { //it takes 2 things, the event we want and 2nd would be the function by that event.
//     e.preventDefault(); //see by this it will prevent default behaviour, with this you will see click on console
//     // console.log('click');
//     // console.log(e.target); // it will tell the target of this click..
//     // console.log(e.target.className); //we can do many things by this as this..
//     //now time to do some thing cool :P figure it out
//     document.querySelector('#my-form').style.background = 'darkgrey'; //see when i click this, it changes.
// //we can also add class, so in styling.css, i have class called bgdark..so
//     document.querySelector('body').classList.add('bg-dark'); //css changing..
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
//     document.querySelector('.items').lastElementChild.style.color = 'black';
// });   
// there are mouseout and mouseover event too. just replace 'click' with them and see difference...
// -------- 2.2. Keyboard Event  ---------
//Grabbing all data
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    //but i want validation first that both of the fields are written..
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); // we have style of error in stytling.css so adding it
        msg.innerHTML = 'Please enter all Fields'; 
        //but i want to disappear this error message after 3 seconds, so we have in JS.
        setTimeout(() => msg.remove(), 3000); //see after 3 sec it will remove 
    } else {
        //when name and email are written, we have to add them as list item in users list
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} `)); //outputing..
        userList.appendChild(li); 
        //now clear fields.. it's important
        nameInput.value = '';
        emailInput.value = '';
    console.log('success');
}
}

// that's how we can manipulate DOM & have interactive application. ok so this is all in UI, if i reload-
// they all are gone..they aren't getting saved anywhere, so if you wanna do this, you have to learn - 
//nodejs, php etc that connects to the database and than send request using fetch API or AJAX.. 
