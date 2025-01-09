// there are multiple ways to exports files :

// first method to do export 
 export function multiply(a,b,c){
    return a*b*c;
}

// second method :
function add(a,b){
    return a+b;
}
export default function subtract (a,b){
    return a-b;
}

export{
    add as addition ,
    // subtract as sub
}

// we also export variable :
 export const student = 23;

 // we also do default export that export only one thing we can't export multiple things