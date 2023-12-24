import { storeSelectedButtonName, getSelectedButtonName } from './appState.js'
import { exercises } from './exercisesDictionary.js'
//const appState = require('./appState');
//const exercises = require('./exercisesDictionary')

// DOM elements
const titlePage = document.getElementById('titlePage');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

const inputValue1 = document.getElementById('inputValue1');
const inputValue2 = document.getElementById('inputValue2');
const inputValue3 = document.getElementById('inputValue3');
const resultContainer = document.getElementById('resultContainer');
const calculateButton = document.getElementById('calculateButton');
const backButton = document.getElementById('backButton')

// Pages
//const MAIN_PAGE = '../../index.html'
const MAIN_PAGE = '/src/index.html'

// Function to show the result
function showResult(result) {
    resultContainer.value = result;
};

// Function to go back the main menu
function changePage(page) {
    location.href = page;
};

// Function to handle the calculation when the button is clicked
function handleCalculateButtonClick() {
    let selectedButtonName = getSelectedButtonName();
    let selectedExercise = exercises[selectedButtonName];

    console.log(selectedButtonName);

    // Check if the first input is empty and the exercise expects at least one input
    if (inputValue1.value === "" && selectedExercise.input !== 0) {
        let mssg = "Please enter a value before calculating.";
        alert(mssg);
        console.log(mssg);
        resultContainer.value = mssg;
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
            // TODO: 'document.getElementById('inputContainer2')' Move to a const
            document.getElementById('inputContainer2').style.display = 'none';
            document.getElementById('inputContainer3').style.display = 'none';
            inputValue1.placeholder = selectedExercise.inputLabels[0];
            label1.innerHTML = selectedExercise.inputLabels[0];

        } else if (selectedExercise.input === 2) {
            // Show two input fields
            document.getElementById('inputContainer2').style.display = 'block';
            document.getElementById('inputContainer3').style.display = 'none';
            inputValue1.placeholder = selectedExercise.inputLabels[0];
            inputValue2.placeholder = selectedExercise.inputLabels[1];
            label1.innerHTML = selectedExercise.inputLabels[0];
            label2.innerHTML = selectedExercise.inputLabels[1];
        } else if (selectedExercise.input === 3) {
            // Show three input fields
            document.getElementById('inputContainer2').style.display = 'block';
            document.getElementById('inputContainer3').style.display = 'block';
            inputValue1.placeholder = selectedExercise.inputLabels[0];
            inputValue2.placeholder = selectedExercise.inputLabels[1];
            inputValue3.placeholder = selectedExercise.inputLabels[2];
            label1.innerHTML = selectedExercise.inputLabels[0];
            label2.innerHTML = selectedExercise.inputLabels[1];
            label3.innerHTML = selectedExercise.inputLabels[2];
        } else {
            // Handle other cases if needed
            document.getElementById('inputContainer1').style.display = 'none';
            document.getElementById('inputContainer2').style.display = 'none';
            document.getElementById('inputContainer3').style.display = 'none';
        }

        //Add default values
        if (selectedExercise && typeof selectedExercise.defaultValues === 'function') {
            var defaultValues = selectedExercise.defaultValues();
            
            if (defaultValues !== null && defaultValues !== undefined) {
                inputValue1.value = defaultValues;
            }
        }

    }

};

// Event listener for the calculate button
calculateButton.addEventListener('click', handleCalculateButtonClick);

// Event listener for the back button
backButton.addEventListener('click', function () {
    changePage(MAIN_PAGE)
});

// Call initializePage on window load
window.addEventListener('load', initializePage);
