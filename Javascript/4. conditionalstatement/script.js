// if - else Statement 
//if-else-else-if Statement
// Nested if- else  
// Ternary operator 



const age = 12;
if(age>=18){
    console.log("eligible to give the vote");
}else{
    console.log("not eligible to give the vote");
    
}
console.log("this will always executed");

let marks = 78;
if(marks>90){
    console.log("Grade A+");
}else if(marks>80){
    console.log("Grade A");
}else if(marks>70){
    console.log("Grade B+");
}else{
    console.log("above average");
    
}

const ages = 78;
if(ages>=18){
    console.log("eligible to give the vote");
    if(ages>=60){
        console.log("you can vote again");
        
    }
}else{
    console.log("not eligible to give the vote");
    
}
console.log("this will always executed");



// ternary operator 
const mark = 50;
const result = mark>=70?"passed":"fail";
console.log(result);

