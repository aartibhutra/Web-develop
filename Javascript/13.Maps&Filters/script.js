// Filters in javascript Arrays

// the filter() method returns a new array with all elements that pass the test defined by the given function .

// filter() does not change the original array 
// filter() does not execute a callback for array elements without values 
// its compulsory in both maps and filter that we have to return in callback function 


// usually we use currentValue only 
// SYNTAX:
// let newArray = oldArray.filter((currentValue,index,array){
// returns elements to new Array
// });


let students = [
    { id: "001" , name: "Aarti" , sports: "Cricket"},
    { id: "002" , name: "raunak" , sports: "badminton"},
    { id: "003" , name: "bharti" , sports: "Kho-Kho"},
    { id: "004" , name: "kartik" , sports: "Cricket"},
    { id: "005" , name: "kapil" , sports: "chess"},
    { id: "006" , name: "Navita" , sports: "chess"}
]

// students.filter((currentValue,index,array) =>{

// })


// here is only problem that they are mutable so we prefer to not use these 
// const newA = [];
// for (let index = 0; index < students.length; index++) {
//         if(students[i].id%2==0){
//             newA.push(students[i]);
//         }
// }


const newArray = students.filter((currentValue) =>{
    if(currentValue.id % 2==0) return true;
    else return false;
})

console.log("New Array here...");
console.log(newArray);


// Maps in javascript Arrays(use to modify the array)

// the map() method creates a new array with the result of calling a function for every array element 
        // map() doesn't change the original array
        // map() executes callback once for each array element in order 

        // SYNTAX:
// let newArray = oldArray.map((currentValue,index,array){
// returns elements to new Array
// });

const names=students.map((currentValue,index,array) =>{
    // return currentValue.name;

    //  show in list items
    // show these in innerHtml container 
    // using this we show in innerHtml container 
    // we can't directly this in innerHTML we have to convert this in string , using joint() method 
    return `<li>${currentValue.name}</li>`;
    
    });
    console.log(names);

    const div = document.getElementById("container");
    // innerHTML mai hume ek hi html set kerna hota hai per yha hume 6 html milre hai tho hum ul ka use karega 
    div.innerHTML = `<ul>${names.join("")}</ul>`;
    

// use both filter and map together  
const namess=students
.filter((currentValue)=> currentValue.sports==="chess")
.map((currentValue,index,array) =>{ 
    return `<li>${currentValue.name}</li>`;
    
    });
    console.log(namess);

    const divv = document.getElementById("container");
    divv.innerHTML = `<ul>${namess.join("")}</ul>`;