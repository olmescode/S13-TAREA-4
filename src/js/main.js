import { storeSelectedButtonName, getSelectedButtonName } from './appState.js'

// Pages
const FUNCTION_EXERCISES_APP = '/src/pages/functionExercisesApp/function_exercises_app.html'

// DOM elements
const submitButtons = document.getElementsByClassName('options-menu');

for (let i = 0; i < submitButtons.length; i++) {
    submitButtons[i].addEventListener('click', handleButtonClick);
}

function changePage(page) {
    location.href = page;
};

function handleButtonClick(event) {
    storeSelectedButtonName(event.target.id);
    changePage(FUNCTION_EXERCISES_APP);
}
