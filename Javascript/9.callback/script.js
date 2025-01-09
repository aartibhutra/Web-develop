// a callback is a function passed as an argument to another function 

// there are two type of function asynchronous and synchronous:
// synchronous:
                // console.log("hello"); first this print 
                //console.log("hello"); then this code run 
                // console.log("hello "); then this code print 


//asynchronous: means that code after some time (used in when we want to pop something )

        // setTimeOut function :
                            // the setTimeOut() method calls a function after a number of milliseconds the setTimeOut() method executes a block of code after the specified time . the method executes the code only once 
                            // setTimeOut() is a asynchronous function , meaning that the timer function will not pause the execution of other functions in the function's stack . 
                            // the commonly used syntax of javascript setTimeOut() is:
                            // we can't return within the setTimeOut method that's why we use the callback function 
                                                                                    // setTimeOut(function,milliseconds);



console.log("hello1");
    //function(): declaration anonymous function 
setTimeout(function(){
    console.log("this code will execute later");
},3000);


console.log("hello2");
console.log("hello3");



// callback function use :

// pizza-> dough -> cheese 

// here we take any name instead of callback but for better understanding we use callback that denote that the function is a  callback function 
function getCheese(callback){
    //() => : is a anonymous function(callback function)
        // for emoji click window+.
        setTimeout(() =>{
        const cheese = "🧀"
        console.log("here is the cheese",cheese);
        //return cheese;// doesn't use this line it can't return anything 
        callback(cheese);
        
    }, 2000);
}

    // why we use callback, because we can't define anything here and without callback they return first undefined 

//console.log(getCheese());// return undefined

// callback use ,the name is callback here 
function makedough(cheese,callback){
    setTimeout(() => {
        const dough = cheese + "🍩";
        console.log(" here is the dough&cheese",dough);
        callback(dough);
    }, 2000);
}

function makepizza(dough,callback){
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log(" here is the pizza",pizza);
        callback(pizza);
    }, 2000);
}



// callback function use 
// for only cheese
// getCheese((cheese) => {
//         console.log("got the cheese",cheese);
        
// });

// for the dough:
// getCheese((cheese)=> {
//     makedough(cheese,(dough)=>{
//         console.log("make the dough",dough);
        
//     })
// });

// for the pizza:
getCheese((cheese)=> {
    makedough(cheese,(dough)=>{
       makepizza(dough,(pizza)=>{
        console.log(" pizza",pizza);
        
       });
        
    });
});






