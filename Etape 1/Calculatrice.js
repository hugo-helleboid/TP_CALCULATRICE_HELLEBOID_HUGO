


function digit_1() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "1";



}


function digit_2() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "2";

}


function digit_3() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "3";

}


function digit_4() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "4";

}


function digit_5() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "5";

}


function digit_6() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "6";

}


function digit_7() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "7";

}


function digit_8() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "8";

}



function digit_9() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "9";

}


function operator_div() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "÷";
}


function operator_times() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "*";
}



function operator_less() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "-";

}

function operator_more() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "+";

}

function operator_modulo() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "%";

}

function operator_clear() {

    let operation = document.getElementById("oper");
    let modification = operation.textContent;
    modification = modification.slice(0, -1);
    operation.textContent = modification;

}

function left_bracket() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + "(";

}

function right_bracket() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";
    operation.textContent = operation.textContent + ")";
}


function equal() {

    let operation = document.getElementById("oper");
    let operationresult = document.getElementById("operresult");
    operationresult.textContent = "Résultat : ";

    let result = eval(operation.textContent);


    operationresult.textContent = operationresult.textContent + operation.textContent + " = " + result;
    operation.textContent = "";

}
