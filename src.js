// todo: "objectify"

let displayVal = '';
let firstVal = '';
let op = '';

let calculator = {
    displayVal: '',
    firstVal: '',
    op: '',
    operate:  
    function(operator, a, b) {
        switch(operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return NaN;
        }
    },
    enter:
    function enter() {
        if (calculator.op != '') {
            console.log("Getting result");
            result = this.operate(this.op,
                                  Number(this.firstVal), 
                                  Number(this.displayVal));
            console.log(result);
            calculator.firstVal = calculator.displayVal;
            calculator.displayVal = String(result);
            return calculator.displayVal;
        }
    },
    clear:
    function clear() {
        this.displayVal = '';
        this.firstVal = '';
        this.op = '';
    },
    operator:
    function operator(op) {
        this.firstVal = this.displayVal;
        this.op = op;
        this.displayVal = '';
    },
    updateDisplay:
    function updateDisplay(value) {
        this.displayVal += value; 
    },
    getDisplayValue:
    function getDisplayValue() {
        return this.displayVal;
    },
    del:
    function del() {
        this.displayVal = this.displayVal.slice(0, this.displayVal.length - 1);
    }
}

// select elements with ids starting with "dig-"
digits = document.querySelectorAll('button[id^=dig-]');
console.table(digits);

[...digits].forEach((digit) => {
    digit.addEventListener('click', digitClickHandler);
});

operators = document.querySelectorAll('button[id^=op');
console.table(operators);
[...operators].forEach((op) => {
    op.addEventListener('click', opClickHandler);
})

enter = document.querySelector('#enter');
enter.addEventListener('click', enterClickHandler);

clear = document.querySelector('#clear');
clear.addEventListener('click', clearClickHandler);

del = document.querySelector('#del');
del.addEventListener('click', delClickHandler);


function digitClickHandler(e) {
    display = document.querySelector('#display');
    calculator.updateDisplay(e.srcElement.innerText);
    display.innerText = calculator.getDisplayValue();;
}

function opClickHandler(e) {
    calculator.operator(e.srcElement.innerText)
    console.log(calculator.firstVal);
    console.log(calculator.op);
}

// logic could be pushed further into the calculator object
function enterClickHandler(e) {
    console.log("enter");
    let result;

    result = document.querySelector('#display');
    result.innerText = calculator.enter();
}

// logic could be pushed further into the calculator object
function clearClickHandler(e) {
    calculator.clear();
    document.querySelector('#display').innerText = '';
}

function delClickHandler(e) {
    calculator.del();
    document.querySelector('#display').innerText = calculator.getDisplayValue();
}