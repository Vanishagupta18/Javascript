const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);// global object but in browser it is window object

// function myFunc() {
//     console.log(this);
// }

// myFunc()

// const chai = function () {//this keyword is not able to used in function
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 5));

//const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()