// Variáveis
let displayValue = '0';
let operator = '';
let operand = '';

// Elementos do DOM
const displayElement = document.getElementById('display');
const lastResultElement = document.getElementById('lastResult');

// Recupera o último resultado armazenado no Local Storage
let lastResult = localStorage.getItem('lastResult') || '0';

// Atualiza o display
function updateDisplay() {
    displayElement.textContent = displayValue;
}

// Atualiza o último resultado visual
function updateLastResult() {
    lastResultElement.textContent = lastResult;
}

// Limpa o display
function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

// Adiciona ponto decimal ao display
function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

// Adiciona número ao display
function appendNumber(number) {
    if (displayValue === '0' || displayValue === '-0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

// Define o operador
function setOperator(op) {
    operator = op;
    operand = displayValue;
    clearDisplay();
}

// Realiza o cálculo
function calculate() {
    const num1 = parseFloat(operand);
    const num2 = parseFloat(displayValue);

    switch (operator) {
        case '+':
            displayValue = (num1 + num2).toString();
            break;
        case '-':
            displayValue = (num1 - num2).toString();
            break;
        case '*':
            displayValue = (num1 * num2).toString();
            break;
        case '/':
            displayValue = (num1 / num2).toString();
            break;
        default:
            break;
    }
    
    // Atualiza o último resultado no Local Storage
    lastResult = displayValue;
    localStorage.setItem('lastResult', lastResult);

    updateDisplay();
    updateLastResult(); // Atualiza visualmente o último resultado
}

// Inicializa o display com o último resultado armazenado
displayValue = lastResult;
updateDisplay();
updateLastResult(); // Atualiza visualmente o último resultado
