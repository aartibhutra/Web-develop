// the javascript switch statement is used in decision making . the switch statement evaluates an expression and execute the corresponding body that matches the expression's result

// Important Notes:
    //1. the break statement is optional if the break statement is encountered the switch statement ends.
    //2. if the break statement is not used the cases after the matching case are also executed
    //3. the default clause is also optional 
    //4. in a javascript switch statement cases can be grouped to share the same code 

const grade ="A";
 switch(grade){
    case "A":
        console.log("A->very good");
        break;
    case "B":
        console.log("B->good");
        break;
    case "C":
        console.log("C->average");
        break;
    default :
        console.log("not found");
        // break; 
 }
