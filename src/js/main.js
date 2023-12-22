import { storeSelectedButtonName, getSelectedButtonName } from './appState.js'
//const { appState } = require('./appState');
//const { storeSelectedButtonName, getSelectedButtonName } = require('./appState');

// DOM elements
const exercise1Button = document.getElementById('exercise1Button');
const exercise2Button = document.getElementById('exercise2Button');
const exercise3Button = document.getElementById('exercise3Button');
const exercise4Button = document.getElementById('exercise4Button');
const exercise5Button = document.getElementById('exercise5Button');
const exercise6Button = document.getElementById('exercise6Button');
const exercise7Button = document.getElementById('exercise7Button');
const exercise8Button = document.getElementById('exercise8Button');
const exercise9Button = document.getElementById('exercise9Button');
const exercise10Button = document.getElementById('exercise10Button');

// Pages
const FUNCTION_EXERCISES_APP = '/src/pages/functionExercisesApp/function_exercises_app.html'

function changePage(page) {
    location.href = page;
};

// Function to handle button clicks
function handleButtonClick(buttonId) {
    storeSelectedButtonName(buttonId);
    changePage(FUNCTION_EXERCISES_APP);
}

// Agrega mas 'addEventListener' aqui para cada boton
exercise1Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});

exercise2Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});

exercise3Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});

exercise4Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});

exercise5Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});

exercise6Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});

exercise7Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});

exercise8Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});

exercise9Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});

exercise10Button.addEventListener('click', function() {
    handleButtonClick(this.id);
});
