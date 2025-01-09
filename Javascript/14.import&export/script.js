// javascript Modules


//if we write import and export in the file then the file becomes a  module 


// as our program grows bigger , it may contain many lines of code . instead of putting everything in a single file , you can use modules to separate codes in separate files according to their functions . This makes our code organized and easier to maintain .
// Benefits of Using Modules:
                    // the code base is easier to maintain because different codes having different functionalities are in different files .
                    // makes code reusable . you can define a module and use it numerous times as per your needs 
// most usable module is ''''utility module ''''

// cannot use import statement outside the module 

// we can rename import and export variable with the help of as 


//  there are many ways to  import a file 
import { multiply as mul} from "./utility.js";

const result = mul(2,3,4);
console.log(result);

import { addition } from "./utility.js";
 const res = addition(4,3);
 console.log(res);

 // if we want two files import then we write :
//   import { addition,sub } from "./utility.js";

// if we want to import all files then we use * and we have to name to star 
//  import * as utility from "./utility.js";
// const ans = utility.sub(4,3);
// console.log(ans);


// import variable :
// console.log(utility.student);

// default export is import without curly braces  we also gave any value to the default export variable
// import subtract from "./utility.js";
import sub from "./utility.js"
const a =sub(9,6);
console.log(a);

 