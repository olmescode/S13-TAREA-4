import { storeSelectedButtonName, getSelectedButtonName } from './appState.js'

// Pages
const FUNCTION_EXERCISES_APP = '/src/pages/functionExercisesApp/function_exercises_app.html'


// DOM elements
const submitButtons = document.querySelectorAll("[data-form-type]");
submitButtons.forEach(button => {
    button.addEventListener("click", function(event){
        handleButtonClick(button.id);
    });
});


function changePage(page) {
    location.href = page;
};

// Function to handle button clicks
function handleButtonClick(buttonId) {
    storeSelectedButtonName(buttonId);
    changePage(FUNCTION_EXERCISES_APP);
}
