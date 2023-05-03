
class calculate{


    constructor() {

        this.list_operator = [];

    }



    operator(op) {

        let operation = document.getElementById("operation");
        let operationresult = document.getElementById("operation_result");
        let modification;


        operation.textContent = "";
        operationresult.textContent = "";

        this.list_operator.push(op); 


        // Mise � jour du DOM via la liste contenant le nouvelle op�rateur

        this.list_operator.forEach(function (valeur) {

            modification = valeur;
            operation.textContent = operation.textContent + modification;

        });

    }


    operator_clear() {



        let operation = document.getElementById("operation");
        let operationresult = document.getElementById("operation_result");
        let modification;




        if (this.list_operator.length != 0 && operationresult.textContent == "") { // Pendant le calcul on veut revenir en arri�re 


            let operation = document.getElementById("operation");
            let modification;

            operation.textContent = ""; 


            this.list_operator.pop(); 


            // Mise � jour du DOM avec les �lements retir�s


            this.list_operator.forEach(function (valeur) {


                modification = valeur;
                operation.textContent = operation.textContent + modification;


            });

        } else if (operationresult.textContent != "" && operation.textContent == "") { // On a eu le r�sultat et l'on revient sur l'op�ration



            operation.textContent = ""; 
            operationresult.textContent = "";

       
            // R�ecriture de l'op�ration ajout�e pr�c�dement 

            this.list_operator.forEach(function (valeur) {

                modification = valeur;
                operation.textContent = operation.textContent + modification;
                operationresult.textContent = "";


            });

        


        }

    
    }


    equal() {

    let operation = document.getElementById("operation");
    let operationresult = document.getElementById("operation_result");
    operationresult.textContent = "";
    let result;



        try {

            result = eval(operation.textContent);
 

        } catch (err) {

            operation.textContent = "";

        }
     
        operationresult.textContent = operationresult.textContent + operation.textContent + " = " + result;
        operation.textContent = "";
    

    }

}


let calculatrice_1 = new calculate(); 








