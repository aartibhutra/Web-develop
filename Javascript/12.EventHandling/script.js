//DOM Event 

// What is an Event?
            // events allow you to write javascript code that reacts to certain situations examples of event include :
                                                // the user clicks the mouse button 
                                                // the web page loading 
                                                // a form field being changed 
            // as of today, there are 2 ways to handle events in javascript 
            // by using an event handler
            // by adding an event listener (mostly we use these )


// Event Handlers:
                // Javascript provides various kinds of event handlers that get triggered based on specific actions on the HTML elements few of the events handlers are :
                                                        //  onclick
                                                        // onload
                                                        // onmouseover
                                                        // onmouseout
                                                        // below 3 events not work in the div they work only the element that gain focus for example body or form input element  
                                                        //onkeypress
                                                        //onkeydown
                                                        //onkeyup
                // you can directly use event handler in the html 


// declarative function 
function myfunction(){
    console.log("i was clicked");
    
}


const mouseover = () =>{
    console.log("mouse over ");
    
}
// keypress event 
function press(){
    console.log("key was pressed");
    
}
// keydown event 
function press1(){
    console.log("key was down ");
    
}



// Event Listeners:
                    // by adding an event listener to an object we can catch a wide range of events triggered by the user or the browser 
                    // we cannot define function in the element in html here we directly write  in the javascript
                    // use addEventListener(write function , use callback function to write something ) function 
                    //elements few of the events listener are :
                                                        //  click
                                                        // load
                                                        // mouseover
                                                        // mouseout
                                                        // below 3 events not work in the div they work only the element that gain focus for example body or form input element  
                                                        //keypress
                                                        //keydown
                                                        //keyup

// here one difference is that in the event listener we can't use on in the function 
// here access particular element where we have to apply event listener
const box1 = document.getElementById("box-1");
// in the callback function inside we define the event object (e)  to get the all information of the event function 
// box1.addEventListener('click',(e) =>{
//     console.log("click by event ",e);
    
// });


// box1.addEventListener('mousemove',(e) =>{
//     console.log("event object ",e.clientX,e.clientY);
    
// });
// box1.addEventListener('click',() =>{
//     console.log("click by event1 ");
    
// });


const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keypress',(e)=>{
    console.log('key',e.key);
    
})

nameInput.addEventListener('focus',(e)=>{
    console.log('Key',e);
    
}
)


// Bubbling VS Capture 

// there are two ways of event propagation in the html DOM, bubbling and capturing event propagation is a way of defining the element order when an event occurs . 
// in bubbling the innermost elements event is handled first and the the outer . 
// in capturing the outermost element event is handled first then the inner . 

// with the addEventListener() method you can specify the propagation type by using the 'useCapture' parameter.

// addEventListener(event,function,useCapture);

// the default value is false , which will use the bubbling propagation, when the value is set to true the event uses the capturing propagation 

// example of bubbling
// box1.addEventListener('click',() =>{
//     console.log("clicked on box ");
    
// });

// const container = document.getElementById('container');
// container.addEventListener('click',() =>{
//     console.log("click on container");
    
// });


// example of capturing 
box1.addEventListener('click',() =>{
    console.log("clicked on box ");
    
},true);

const container = document.getElementById('container');
container.addEventListener('click',() =>{
    console.log("click on container");
    
},true);