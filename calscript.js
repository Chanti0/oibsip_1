
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace percentage sign with its equivalent decimal
        let expression = display.value.replace(/%/g, '/100');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
