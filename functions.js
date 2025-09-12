// function addTwoNumbers(number1, number2){//parameters number1 and number2

//     console.log(number1 + number2);
// }
// console.log(addTwoNumbers(5, 7));//arguments 5 and 7 are passed to the function



function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

function loginUserMessage(username="arjun"){//default parameter username is arjun
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())
