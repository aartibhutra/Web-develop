// im javascript a promise is a good way to handle asynchronous operations . it is used to find out if the asynchronous operation is successfully completed or not 
// a promise have one of three state 
        //1. pending 
        //2.fulfilled
        //3.rejected

// syntax of promise:
        // const promise = new Promise(function(resolve,reject)


//create a promise 
            // constructor is basically to create an object 
            // to create a promise we use the promise() constructor 
            // the promise() constructor takes a function as an argument . the function also accepts two function resolve() and reject.
            // if the promise return successfully , the resolve() function is called and if an error occurs the reject() function is called .


// using a promise :
                // below 3 are  callback function 
                // the then() method:
                                        // it is used with the callback when the promise is successfully fulfilled or resolve 
                // the catch() method :
                                        // it is used with the callback when the promise is rejected or if an error occurs 
                // the finally() method ;
                                        // it gets executed when the promise is either resolved successfully or rejected .
                                

// Promise work in 2 steps , first we create the Promise then second use the promise 
// ticket == promise
// this example is synchronous :
const ticket = new Promise(function(resolve,reject){
        const isboareded = false;
        if(isboareded){
                resolve("you are not in the flight");

        }else{
                reject(" your flight has been cancelled");
        }
});

// how we use the promise or call the promise method or constructor :
ticket
        .then((data)=>{
                console.log("woohh",data);
        }).catch((data)=>{
                console.log("ohh noo ....",data);
        
        })
        .finally(()=>{
                console.log("i will always be executed!");
                
        });



// asynchronous example:


