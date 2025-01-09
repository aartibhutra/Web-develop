// creating an array by using [] 
// arrays in javascript can be mixed data types.

// you can find the length of an element using the length property 
// const length = newData.length;
// elements stored in continuous form 

const arr =["Aarti","Raunak"];
console.log(arr);
// both neww and arr points to the same thing 
// if we change the in the neww it automatically change in the arr array also 
const neww = arr;
neww[1]="bharti";
console.log(neww);
console.log(arr);

const char= ['h','e','l','l','o'];
console.log(char[0]);


// in array we put mixed datatype 
const array =["Aarti","Raunak",true,0,{name:"aaru"},function hello(){console.log("hello world");}];
console.log(array[7]);//error occur (undefined) 
console.log(array[0]);
console.log(array.length);


// Methods in the array :
// 1. indexOf(): search an element of an array and return the position .
// 2. includes(): checks if an array contains a specified element .
// 3. push() : adds a new element to the end of an array and returns the length of an array .
// 4. unshift(): adds a new elements to the beginning of an array and return the new length of an array 
// 5. pop(): removes the lost element of an array and return the  removed array 
// 6. shift(): removes the first element of an array and return the removed element 
// 7. sort(): sorts thr element alphabetically in strings and in ascending order 
// 8. slice(): select the part of an array and return the new array 
const nums = [3,5,7,3,2,5,1];
console.log(nums.indexOf(7));
console.log(nums.indexOf(80));// return -1 because element not present in the array 

console.log(nums.includes(2));

nums.push("Aarti");// push element at the end 
console.log(nums);

nums.unshift("raunak");// push element at the beginning 
console.log(nums);

nums.pop();
console.log(nums);

nums.shift();
console.log(nums);

console.log(nums.sort());

const subarray = nums.slice(2,6);// last element is excluded
console.log(subarray);






