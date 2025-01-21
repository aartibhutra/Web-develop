// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "1234b"
tinderUser.name = "Aarti"
tinderUser.isLoggedin = false
// console.log(tinderUser);


// nested object 
const regularUser = {
    email : "bhutra@gmail.com",
    fullname : {  // here fullname is an object within the object 
        userfullname : {
            firstname : "Aarti",
            lastname: "bhutra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


// combine the objects 
const obj1 = {
    1:"a",2:"b"
}

const obj2 = {
    3:"a",4:"b"
}

// const obj3 = {obj1,obj2}

// assign(target is {}, source are obj1,obj2)
// const obj3 = Object.assign({},obj1 , obj2)

// here use the spread operator ...(we usually use these concept)
const obj3 = {...obj1,...obj2}
console.log(obj3);



// how in the database we access the object 
// there within the array we have multiple objects 

const Users = [
    {
        id : 1,
        email: "aarti@gmail.com"
    },
    {
        id:2,
        email:"raunak@gmail.com"
    }
]
console.log(Users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));// datatype is array 
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// use hasOwnProperty to check the value in the object
console.log(tinderUser.hasOwnProperty('isLoggedin'));
