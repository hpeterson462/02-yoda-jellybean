// import functions and grab DOM elements
import { isSick } from './jellybeanUtilis.js';

const myButton = document.getElementById('button');

const resultSpan = document.getElementById('result');
// initialize state
let jellybeans = 0;
// set event listeners to update state and DOM
myButton.addEventListener('click', () => {
    jellybeans++;
    console.log('jellybeans');

    resultSpan.textContent = jellybeans;

    if (isSick(jellybeans)) {
        document.querySelector('main').style.background = 'red';

        const sickBox = document.querySelector('#sick-box');
        sickBox.textContent = 'uugghh!';
    }
});