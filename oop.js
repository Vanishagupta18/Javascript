//JS is Prototype-based language
//OOP programming
//Object: Collection of properties and methods
//Object literal,Constructor function,prototypes,Classes,Instances(new,this)
//4 pillars
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);//this refer to current context
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);//global context//empty object


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)//new keyword create new object
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);

//instanceof ..read