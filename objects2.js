//const tinderUser=new Object();

const tinderUser={}

tinderUser.name="John Doe"
tinderUser.age=28
tinderUser.isActive=true

// console.log(tinderUser)

const regularUser={
    email:"some@example.com",
    fullname:{
        userFullname:{
            firstname:"John",
            lastname:"Doe"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname)

//console.log(regularUser["fullname"]["userFullname"]["firstname"])

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const mergedObjects=Object.assign({},obj1,obj2)

// console.log(mergedObjects)

const obj3={5:"e",6:"f"}

const mergedObjects2={...obj1,...obj2,...obj3}

// console.log(mergedObjects2)

const users=[
    {
        username:"user1",
        password:"pass1"
    }
    ,
    {
        username:"user2",
        password:"pass2"
    }
]

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("age"))//check if property exists in object

const course={
    coursename:"JavaScript",
    price:999,
    courseInstructor:"Jane Smith"
}

//course.courseinstructor

const {courseInstructor}=course//destructuring

console.log(courseInstructor)//Jane Smith

//json example
// {
//     "name":"Alice",
//     "age":30,
//     "profession":"Engineer"
// }

//array of objects example
// [
//     {},
//      {},
//      {}
// ]
//json formater search online tool