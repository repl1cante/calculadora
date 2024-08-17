let display = document.getElementById("display");
let currentValue = "";
let history = document.getElementById("history");
let historyList = document.getElementById("history-list");
let historyVisible = false;
let storedHistory = [];

function addToDisplay(value) {
    currentValue += value;
    display.value = currentValue;
}

function calculate(operator) {
    if (operator === "=") {
        try {
            let result = eval(currentValue);
            display.value = result.toString();
            let historyEntry = `${currentValue} = ${result}`;
            historyList.innerHTML += `<li>${historyEntry}</li>`;
            storedHistory.push(historyEntry);
            currentValue = result.toString();
        } catch (error) {
            display.value = "Erro";
        }
    } else {
        if (["+", "-", "*", "/"].includes(operator)) {
            currentValue += operator;
        }
        display.value = currentValue;
    }
}

function clear() {
    currentValue = "";
    display.value = "";
}

function backspace() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}

function showHideHistory() {
    if (historyVisible) {
        history.style.display = "none";
        historyVisible = false;
    } else {
        historyList.innerHTML = "";
        storedHistory.forEach(entry => {
            historyList.innerHTML += `<li>${entry}</li>`;
        });
        history.style.display = "block";
        historyVisible = true;
    }
}

function redirectToGitHub() {
    window.location.href = "https://github.com/repl1cante";
}
