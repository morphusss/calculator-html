equationSymbols = [];

console.log(equationSymbols);

const resultElement = document.querySelector('.result');

result = '31';

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
    resultElement.innerHTML = 0;
    equationSymbols.push('0');
}

oneButton.onclick = () => {
    resultElement.innerHTML = 1;
}

twoButton.onclick = () => {
    resultElement.innerHTML = 2;
}

threeButton.onclick = () => {
    resultElement.innerHTML = 3;
}

fourButton.onclick = () => {
    resultElement.innerHTML = 4;
}

fiveButton.onclick = () => {
    resultElement.innerHTML = 5;
}

sixButton.onclick = () => {
    resultElement.innerHTML = 6;
}

sevenButton.onclick = () => {
    resultElement.innerHTML = 7;
}

eightButton.onclick = () => {
    resultElement.innerHTML = 8;
}

nineButton.onclick = () => {
    resultElement.innerHTML = 9;
}

delButton.onclick = () => {
    resultElement.innerHTML = ' ';
    equationSymbols.pop();
}

plusButton.onclick = () => {
    resultElement.innerHTML = '+';
}

minusButton.onclick = () => {
    resultElement.innerHTML = '-';
}

dotButton.onclick = () => {
    resultElement.innerHTML = '.';
}

divideButton.onclick = () => {
    resultElement.innerHTML = '/';
}

multButton.onclick = () => {
    resultElement.innerHTML = 'x';
}

resetButton.onclick = () => {
    resultElement.innerHTML = ' ';
}

equalButton.onclick = () => {
    resultElement.innerHTML = 'wait...';
}

delButton.onclick()



