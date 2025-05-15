

function mainProblemOne()
{
    clearPreviousOutput();
    
    while (!isValidInputForProblemOne) {
        
        getNumberForProblemOne();
        checkIfInputForProblemOneIsValid();
    }
    
    if (numberForProblemOne % 2  ==  0) {
        
        printRectangle();
    }
}

