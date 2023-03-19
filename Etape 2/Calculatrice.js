
class calculate{


    operator(op) {

        let operation = document.getElementById("operation");
        let operationresult = document.getElementById("operation_result");
        operationresult.textContent = "";
        operation.textContent = operation.textContent + op;

    }


    operator_clear() {

        let operation = document.getElementById("operation");
        let modification = operation.textContent;
        modification = modification.slice(0, -1);
        operation.textContent = modification;

    }


    equal() {

    let operation = document.getElementById("operation");
    let operationresult = document.getElementById("operation_result");
    operationresult.textContent = "";
    let result;



        try {

            result = eval(operation.textContent);
 

        } catch (err) {


            // En cas d'échec

            //operationresult.textContent = operationresult.textContent + "error";
            operation.textContent = "";

        }


        //En cas de succès

        operationresult.textContent = operationresult.textContent + operation.textContent + " = " + result;
        operation.textContent = "";
    

}

}


let calculatrice_1 = new calculate(); // Ins







/*
function operation(operateur) {

    let operation = document.getElementById("operation");
    let operationresult = document.getElementById("operation_result");
    operationresult.textContent = "";
    operation.textContent = operation.textContent + operateur;



}


function operator_clear() {

    let operation = document.getElementById("operation");
    let modification = operation.textContent;
    modification = modification.slice(0, -1);
    operation.textContent = modification;

}



function equal() {

    let operation = document.getElementById("operation");
    let operationresult = document.getElementById("operation_result");
    operationresult.textContent = "";

    let result = eval(operation.textContent);


    operationresult.textContent = operationresult.textContent + operation.textContent + " = " + result;
    operation.textContent = "";

}

*/
