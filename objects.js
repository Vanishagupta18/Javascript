//singleton 
//object constructor: a single instance is created
//object literal: no singleton is created
//Object.create is used to create a new object with the specified prototype object and properties.

const mySym=Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "value1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])//correct way to access symbol property

JsUser.email="vani@gmail.com"
// Object.freeze(JsUser)//it will not allow to change the object properties

JsUser.email="hello@gmail.com"//it will not change the email as object is freezed
console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JsUser")
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo())
JsUser.greeting()
