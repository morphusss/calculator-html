// TODO: Make horizontal scroll on result field
// TODO: Make final calculation 

let equationSymbols = [];

console.log(equationSymbols);

const resultElement = document.querySelector('.result');

let result = '';

resultElement.innerHTML = result;

const zeroButton = document.getElementById('num0');

const oneButton = document.getElementById('num1');

const twoButton = document.getElementById('num2');

const threeButton = document.getElementById('num3');

const fourButton = document.getElementById('num4');

const fiveButton = document.getElementById('num5');

const sixButton = document.getElementById('num6');

const sevenButton = document.getElementById('num7');

const eightButton = document.getElementById('num8');

const nineButton = document.getElementById('num9');

const delButton = document.getElementById('del');

const plusButton = document.getElementById('plus');

const minusButton = document.getElementById('minus');

const dotButton = document.getElementById('dot');

const divideButton = document.getElementById('divide');

const multButton = document.getElementById('mult');

const resetButton = document.getElementById('reset');

const equalButton = document.getElementById('equal');

zeroButton.onclick = () => {
    console.log('0 pressed');
    equationSymbols.push('0');
    resultElement.innerHTML = displayEquationSymbols();
}

oneButton.onclick = () => {
    console.log('1 pressed');
    equationSymbols.push('1');
    resultElement.innerHTML = displayEquationSymbols();
}

twoButton.onclick = () => {
    console.log('2 pressed');
    equationSymbols.push('2');
    resultElement.innerHTML = displayEquationSymbols();
}

threeButton.onclick = () => {
    console.log('3 pressed');
    equationSymbols.push('3');
    resultElement.innerHTML = displayEquationSymbols();
}

fourButton.onclick = () => {
    console.log('4 pressed');
    equationSymbols.push('4');
    resultElement.innerHTML = displayEquationSymbols();
}

fiveButton.onclick = () => {
    console.log('5 pressed');
    equationSymbols.push('5');
    resultElement.innerHTML = displayEquationSymbols();
    
}

sixButton.onclick = () => {
    console.log('6 pressed');
    equationSymbols.push('6');
    resultElement.innerHTML = displayEquationSymbols();
}

sevenButton.onclick = () => {
    console.log('7 pressed');
    equationSymbols.push('7');
    resultElement.innerHTML = displayEquationSymbols();
}

eightButton.onclick = () => {
    console.log('8 pressed');
    equationSymbols.push('8');
    resultElement.innerHTML = displayEquationSymbols();
}

nineButton.onclick = () => {
    console.log('9 pressed');
    equationSymbols.push('9');
    resultElement.innerHTML = displayEquationSymbols();
}

delButton.onclick = () => {
    console.log('DEL pressed');
    deleteLastSymbol();
    resultElement.innerHTML = displayEquationSymbols();
}

plusButton.onclick = () => {
    console.log('plus pressed');
    equationSymbols.push(' + ');
    resultElement.innerHTML = displayEquationSymbols();
}

minusButton.onclick = () => {
    console.log('minus pressed');
    equationSymbols.push(' - ');
    resultElement.innerHTML = displayEquationSymbols();
}

dotButton.onclick = () => {
    console.log('dot pressed');
    equationSymbols.push('.');
    resultElement.innerHTML = displayEquationSymbols();
}

divideButton.onclick = () => {
    console.log('divide pressed');
    equationSymbols.push(' / ');
    resultElement.innerHTML = displayEquationSymbols();
}

multButton.onclick = () => {
    console.log('multiply pressed');
    equationSymbols.push(' * ');
    resultElement.innerHTML = displayEquationSymbols();
}

resetButton.onclick = () => {
    console.log('RESET pressed');
    deleteAllSymbols();
    resultElement.innerHTML = ' ';
}

equalButton.onclick = () => {
    resultElement.innerHTML = 'wait...';
    console.log('= pressed');
    console.log(equationSymbols);
    calculateAllSymbols();
}



function displayEquationSymbols() {
    let symbols = "";

    for (let i = 0; i < equationSymbols.length; i++){

        symbols += equationSymbols[i];

    }

    return symbols;
}

function deleteAllSymbols() {
    equationSymbols = [];
    console.log(equationSymbols);
}

function deleteLastSymbol() {
    equationSymbols.length = equationSymbols.length - 1; 
    console.log(equationSymbols);
}


// function calculateAllSymbols() {
//     const variable = displayEquationSymbols();
//     const finalResult = parseFloat(variable, 10);
//     console.log(variable);
//     console.log(finalResult);
// }