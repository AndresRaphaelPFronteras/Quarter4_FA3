
const numberForProblemOneLowerBound = 2;
const numberForProblemOneUpperBound = 20;

var numberForProblemOne;
var isValidInputForProblemOne = false;


function clearPreviousOutput()
{
    document.getElementById("problemOne").innerHTML = "<p>" + "" + "</p>";
}

function getNumberForProblemOne()
{
    numberForProblemOne = Number(prompt("Enter a number from 2 to 20."));
    // numberForProblemOne being NaN is taken into account in checkIfInputForProblemOneIsValid().
}

function checkIfInputForProblemOneIsValid()
{   
    if (isNaN(numberForProblemOne)) { 
        
        alert("You must input a number within the bounds.");
        return 0;
    }
    
    if (numberForProblemOne < numberForProblemOneLowerBound  ||  numberForProblemOne > numberForProblemOneUpperBound) {  
        
        alert("You must input a number within the bounds.");
        return 0;
    }
    
    isValidInputForProblemOne = true;
    return 0;
}

function printRectangle()
{  
    for (var i = 0; i < numberForProblemOne; i++) {
        
        for (var j = 0; j < numberForProblemOne; j++) {
            
            document.getElementById("problemOne").innerHTML = numberForProblemOne + "";
        }
        
        document.getElementById("problemOne").innerHTML = "<br>";
    }
}

