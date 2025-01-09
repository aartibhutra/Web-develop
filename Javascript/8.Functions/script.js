// a function is a block of code that performs a specific task. dividing a complex problem into smaller chunks makes your program easy to understand and reusable .
// we use piece of code again and again with the help of function 

// we can create function anywhere in the code like in above the code or below the code 

// we do **hosting**(define function anywhere) in the function declaration 


// Function Declaration :
function sumoftwonumber(a,b){
    const sum = a + b;
    console.log('the result is ',sum);
    return sum;
}
const a = 9;
const b = 10;
const result =sumoftwonumber(a,b);
console.log("the result is:::",result);
 

const c = 10;
const d = 10;
sum(c,d);
function sum(a,b){
    const sum = a + b;
    console.log('the result is ',sum);
}


//Function Expression(anonymous function ) :
                // a function expression is very similar to and has almost the same syntax as function declaration the main difference between a function expression and a function declaration is the function name which  can be omitted in function expression to create a anonymous (not define the function name )function . 

                // syntax: const variable = function (para1, para2,para3){
                // code to be executed              return something }

                // important : we can't do **hosting ** here we have to define (initialization )the function at top of the code 



const square = function(nums){
    return nums*nums;
}
console.log(square);
console.log(square(4));



// Nested Function (IMPORTANT TOPIC ), javascript support nested function :
        // you may nest a function within another function . The nested (inner ) function is private to its containing (outer) function .





