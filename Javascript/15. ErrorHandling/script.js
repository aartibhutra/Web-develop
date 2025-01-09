// try-catch block 

// the main code is inside the try block while executing the try block , if any error occurs , it goes to the catch block .The catch block handles the errors as per the catch statement .

// if no error occurs the code inside the try block is executed and the catch block is skipped 

try{
    console.log(age);
    
} catch(err){
// err: is the error object 
// by default it give name and the message 
    // console.log(err);
    console.log(err.name);
    console.log(err.message);
}

// throw a customize error using throw keyword 
// try {
//     const res = prompt("are you a robot ?")
//     if(res === 'y'){
//         // throw 12;
//         // throw{
//         //     name: "Aarti bhutra"
//         // };
//         throw new Error(" robot found") 
//     }
// } catch (error) {
//     console.log(error.name,error.message);
// }

// Finally block :always executed 
try {
    const res = prompt("are you a robot ?")
    if(res === 'y'){
        throw new Error(" robot found") 
    }
} catch (error) {
    console.log(error.name,error.message);
    
}finally{
    console.log("hello ! everyone ");
    
}

