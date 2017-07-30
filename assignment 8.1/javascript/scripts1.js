//function returns an anonymus function
function multiply(firstNum) {
    return function(secondNum) {
        
           console.log(firstNum*secondNum);

    }
}

//outer function invokes the inner function 
// multiply(5)(2);

// OR

var multiplyBy5 = multiply(5);
// anonymus function has access to parent function parameter through closure
multiplyBy5(2);



