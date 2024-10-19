// define:a datatype in programming is a classification that specifies which type of a variable has and what type of mathematical , relational or logical operations can be apllied to it without causing an error 
//     a. String(""):
//     b.Number:
//     c.Boolean:
//     d.Undefined: when a variable is declared and not initialized or not assigned with any value . by default the variable was stored with an undefined value 
//     e.Object: it contains both build-in objects and user defined objects.
                        // build - in - object types can be : objects, arrays, dates , maps , sets etc 

// for checking the datatype we use 
            //typeof()



//** Javascript Type Conversion :
        //1. javascript considers 0 as false and all non-zero numbers as true and if true is converted to a number the result is converted to a number the result is always 1 .
        //2. String() takes null and undefined and converts them to string 
        //3. in javascript undefined , null, 0, NaN converts to false . all other values give true . 



// number datatype 
let a = 23;

// string datatype
a = "Aarti";

//boolean datatype
a=false;


console.log('a :',a);// log click tab 
console.log('the type of a is :',typeof(a));

// object data type 

let person = {first:"Aarti",last:"bhutra"};// object
let cars =["saab","volvo","bmw"];//Array object
let date = new Date('2024-10-19');
console.log('person name:', person);
console.log('the type of person is:',typeof(person));
console.log('cars name:', cars);
console.log('the type of cars is:',typeof(cars));
console.log('current date :', date);
console.log('the type of date is:',typeof(date));

// undefined data type 
let x;
console.log('the type of x is:',typeof(x));
let vari = undefined;
console.log('variable:',vari);
console.log('the type of variable is:',typeof(vari));

// convert number to string :
let y = 23;// number 
y = y+1;
console.log(y);

//y = '23';// string
 y = String(y);
y = y+1;
console.log(y);

// number to boolean 
y = Boolean(y);
console.log(y);

// string to booean 
z ="Aarti";
console.log(z);
z = Boolean(z);
console.log(z);
b ="";
console.log(b);
b = Boolean(b);
console.log(b);// empty string 

// convert boolean to  number 
c = true;
c = Number(c);
console.log(c);








