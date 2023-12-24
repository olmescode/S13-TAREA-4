import { storeSelectedButtonName, getSelectedButtonName} from './appState.js'
import { exercises } from './exercisesDictionary.js'
//const exercises = require('./exercisesDictionary')

// DOM elements
const titlePage = document.getElementById('titlePage');
const inputValue1 = document.getElementById('inputValue1');
const inputValue2 = document.getElementById('inputValue2');
const inputValue3 = document.getElementById('inputValue3');
const resultValue = document.getElementById('resultValue');
const calculateButton = document.getElementById('calculateButton');
const backButton = document.getElementById('backButton')
const inputContainer1 = document.getElementById('inputContainer1')
const inputContainer2 = document.getElementById('inputContainer2')
const inputContainer3 = document.getElementById('inputContainer3')
const resulContainer = document.getElementById('resultContainer')

// Pages
const MAIN_PAGE = '/src/index.html'
//const MAIN_PAGE = '../../index.html'

// Function to show the result
function showResult(result) {
    resultValue.value = result;
};

// Function to go back the main menu
function changePage(page) {
    location.href = page;
};

// Function to handle the calculation when the button is clicked
function handleCalculateButtonClick() {
    let selectedButtonName = getSelectedButtonName();
    let selectedExercise = exercises[selectedButtonName];

    // Check if the first input is empty and the exercise expects at least one input
    if (inputValue1.value === "" && selectedExercise.input !== 0) {
        alert("Please enter a value before calculating.");
        return;
    }

    if (selectedButtonName) {
        let selectedExercise = exercises[selectedButtonName];
        let result = selectedExercise.func(inputValue1.value, inputValue2.value, inputValue3.value);
        showResult(result);
    }
};

// Call initializePage on window load
function initializePage() {
    let selectedButtonName = getSelectedButtonName();
    
    if (selectedButtonName) {
        let selectedExercise = exercises[selectedButtonName];
        titlePage.innerText = selectedExercise.title;

        // Update the number of input fields based on the selected function
        if (selectedExercise.input === 1) {
            // Show one input field
            inputContainer2.style.display = 'none';
            inputContainer3.style.display = 'none';
            inputValue1.placeholder = selectedExercise.inputLabels[0];
        } else if (selectedExercise.input === 2) {
            // Show two input fields
            inputContainer2.style.display = 'block';
            inputContainer3.style.display = 'none';
            inputValue1.placeholder = selectedExercise.inputLabels[0];
            inputValue2.placeholder = selectedExercise.inputLabels[1];
        } else if (selectedExercise.input === 3) {
            // Show three input fields
            inputContainer2.style.display = 'block';
            inputContainer3.style.display = 'block';
            inputValue1.placeholder = selectedExercise.inputLabels[0];
            inputValue2.placeholder = selectedExercise.inputLabels[1];
            inputValue3.placeholder = selectedExercise.inputLabels[2];
        } else {
            // Handle other cases if needed
            inputContainer1.style.display = 'none';
            inputContainer2.style.display = 'none';
            inputContainer3.style.display = 'none';
        }
    }
};

// Event listener for the calculate button
calculateButton.addEventListener('click', handleCalculateButtonClick);

// Event listener for the back button
backButton.addEventListener('click', function(){
    changePage(MAIN_PAGE)
});

// Call initializePage on window load
window.addEventListener('load', initializePage);
