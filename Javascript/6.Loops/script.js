// for loop
// do while loop 
// while loop
//note:  a for loop is usually used when the number of iterations is known and while and do while loop are usually used when number of iterations are unknown  

// break and continue: the break statement is used terminate the loop immediately when it is encountered 
// the continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration 


for(let index =0;index<=5;index++){
    console.log('hello',index);
}

let step =0;
while(step<5){
    console.log(step,'step');
    step++;
} 

let i =1;
do{
    console.log(i,'hii');
    i++;
}while(i<0);