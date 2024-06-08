// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput = document.querySelector('#userInput1');
let copy = document.querySelector('#copy');
let output = document.querySelector('#output');
// add an event listener on the target element
copy.addEventListener('click', handleClick);
// callback function to handle event
function handleClick(event) {
    console.log('click event', event);
    output.textContent = userInput.Value;
}
// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector('#userInput2');
// add an event listener on the target element
userInput2.addEventListener('input', handleInput);
// callback function to handle event
let section = document.querySelector('#inputEventExample');
let element = document.createElement('div');
element.setAttribute('class', 'output');
section.append(element);

function handleInput(event) {
    console.log(userInput2.value);
    element.textContent = userInput2.value;
}