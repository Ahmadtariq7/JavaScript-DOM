
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "Events.js" in LINE 19 in index.html..}

//                  ---------------   1. Events    ------------------
// YOU HAVE TO COMMNET OUT ONE OF FOLLOWING TO CHECK ONE
// -------- 1.1. Mouse Event  ---------

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

// -------- 1.2. Keyboard Event  ---------
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
