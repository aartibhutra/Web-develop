
// asynchronous example:
function getCheese(){
    //()=> is the callback function(anonymous function) 
    return new Promise((resolve,reject)=>{
        // code of asynchronous :
        setTimeout(()=>{
            const cheese = "🧀";
            // console.log("here is the cheese",cheese);
            // here we usually use callback function , but right now we have to use promise function 
            // this will return the promise that when we get the cheese we return it 
            // here in the method only one data pass at a time 
            resolve(cheese);
        },2000);
    });
    // setTimeOut(()=>{
    //     const cheese = "🧀";
    //     console.log("here is the cheese",cheese);
    //     // here we usually use callback function , but right now we have to use promise function 
    //     // this will return the promise that we get the cheese 
    // },2000)
}

function makeDough(cheese){
    //()=> is the callback function(anonymous function) 
    return new Promise((resolve,reject)=>{
        // code of asynchronous :
        setTimeout(()=>{
            const dough = cheese + "🍩";
            // console.log("here is the dough",dough);
           // reject("bad cheese");
            resolve(dough);
        },2000);
    });
}

function makepizza(dough){
    //()=> is the callback function(anonymous function) 
    return new Promise((resolve,reject)=>{
        // code of asynchronous :
        setTimeout(()=>{
            const pizza = dough + "🍕";
            // console.log("here is the pizza",pizza);
            resolve(pizza);
        },2000);
    });
}


// use the async and await(only use on the asynchronous function0 )
// if process is reject then use the try - catch 
async function orderPizza() {
    try{
    const cheese = await getCheese();
    console.log("here is the cheese",cheese);
    
    const dough = await makeDough(cheese);
    console.log("here is the dough",dough);
    
    const pizza = await makepizza(dough);
    console.log("here is the pizza",pizza);
    }catch(err){
        console.log("error occur",err);
        
    }
    console.log("process ended ");
    
}

orderPizza();




// print the promise statement here :
// getCheese()
//         .then((cheese)=>{
//             console.log("here is the cheese",cheese);
//             return makeDough(cheese);// here it give the promise of the dough
//         })
//         .then((dough)=>{
//             console.log("here is the dough",dough);
//             return makepizza(dough);// here it give the promise of the pizza
//         })
//         .then((pizza)=>{
//             console.log("here is the pizza",pizza);
            
//         })
//         .catch((data)=>{
//             console.log("error occur",data);
            
//         })
//         .finally(()=>{
//             console.log("process ended");
            
//         })

