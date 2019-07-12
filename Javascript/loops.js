
// {------  TO TEST THIS FILE ON BROWSER, CHANGE "___.js" TO "loops.js" in LINE 19 in index.html..}

// -----  1. For Loop ------
for (let i = 0; i < 5; i++) { //same as in other languages..
    console.log(`For loop number: ${i}`);
}

// ----- 2. While Loop ------
let i = 0;
while (i < 5) {
    console.log(`While loop number: ${i}`);
    i++
}

// ----- 3. Todos(which we created in previous lecture) with For Loop {LOOP THROUGH ARRAY} ------
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

// These are Loops, See you in next File.