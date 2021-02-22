var operator = '';
var input = '';
var equation = '';
var part = '';

function Input(number){
    input = number;
    equation = equation + input;
    part = part + input;
    document.getElementById("result-number").innerHTML = eval(part);
};

function Operator(selected){
    operator = selected;
    equation = equation + operator;
    input = '';
    part = '';
};

function Calculate(){
    document.getElementById("result-number").innerHTML = eval(equation);
    operator = '';
    input = '';
    equation = '';
    part = '';
};

function Clean(){
    operator = '';
    input = '';
    equation = '';
    part = '';
    document.getElementById("result-number").innerHTML = ("0");
}