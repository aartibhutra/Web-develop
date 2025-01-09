// Nested Function (IMPORTANT TOPIC ), javascript support nested function :
        // you may nest a function within another function . The nested (inner ) function is private to its containing (outer) function when we  are calling inner function outside the outer function then it doesn't work but we call outer function outside the outer function then it works  .
// return statement kisi bhi function kai last mai likhte hai 



function addsquare(a,b){

    const sa = square(a);
    const sb = square(b);

    function square(num){
        // here hum return kerne sai phele kitne bhi function or code likh sakte hai return kerne kai baad kuch nhi hoga 

        return num*num;
    }
    return sa + sb;
}
console.log(addsquare(3,4));