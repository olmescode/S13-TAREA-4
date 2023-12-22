// Variable with the key to store in the local storage
let SELECTED_BUTTON_NAME_KEY = "selectedButton"

// Function to update page details based on the clicked button
function storeSelectedButtonName(exerciseFunctionName) {
    // Store the value in localStorage
    localStorage.setItem(SELECTED_BUTTON_NAME_KEY, exerciseFunctionName);
};

function getSelectedButtonName() {
    return localStorage.getItem(SELECTED_BUTTON_NAME_KEY)
};

export { storeSelectedButtonName, getSelectedButtonName };

/*
// appState.js
let selectedButtonName = null;

function storeSelectedButtonName(name) {
    selectedButtonName = name;
    console.log("Hello guradando " + selectedButtonName)
}

function getSelectedButtonName() {
    console.log("Hello Retornando " + selectedButtonName)
    return selectedButtonName;
}

export { storeSelectedButtonName, getSelectedButtonName };
//module.exports = { storeSelectedButtonName, getSelectedButtonName };
*/