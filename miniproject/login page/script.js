try {
    const res = prompt("are you a robot ?")
    if(res === 'y'){
        // throw 12;
        // throw{
        //     name: "Aarti bhutra"
        // };
        throw new Error(" robot found") 
    }
} catch (error) {
    console.log(error);
    
}