// objects are shown(declare) in two forms(ways) as a literals or a constructor 

// when we define an object as a literals then we can't make a singleton 

// Singleton : when we create  a constructor there are only one object is created 
// Object.create


// object Literals : 
const JsUser = {} // here we create a object just like that 

// use the Symbols(datatype) :
                // use as a key 
                // use to call with the help of [] this 
                // define within the objects as []


const mySym = Symbol("key1")

// here object define as a key:value and we also access them as a both way like key or a value 
// here under this you give anything like arrays
const Jsuser = {
    name:"Aarti bhutra ",// here name is by default behave as a string "name" 

    "full name":"Aarti maheshwari",// this can't by access by . method that's why we use the another method

    //mySym:"myKey1",// without [] this , this give the datatype String 
    [mySym]:"myKey1",

    age: 20,
    location:"Jaipur",
    email:"aarti@gmail.com",
    isLOggedIn: false,
    LatloginDays:["Monday","Tuesday"]
}

console.log(Jsuser.email);// its not a right way to access the object
console.log(Jsuser["email"]);

console.log(Jsuser["full name"]);

console.log(Jsuser[mySym]);

// with the help of equal symbol (=) we can overwrite the value 
Jsuser.email = "aartimaheshwari@gmail.com"
console.log(Jsuser.email);

// you can freeze the object that we can't change anything 
// Object.freeze(Jsuser)
// Jsuser.email = "bhutra@gmail.com"
// console.log(Jsuser)

// in JS you treat function as a variable 

Jsuser.greeting = function(){
    console.log("Hello js user");
    
}

// console.log(Jsuser.greeting);// give whole function  
console.log(Jsuser.greeting());


// here we are calling the name in the object 
Jsuser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);// here you do the string interpolation
    
}
console.log(Jsuser.greeting2())
