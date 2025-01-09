// when a page is loaded the browser create a Document object model of the page .
// The HTML DOM Model is constructed as a tree of objects.

// Finding the HTML Element:
    // finding the html id : document.getElementById("intro");
    // finding html elements by tag name : document.getElementByTagName("p");
    // finding html elements by class name : document.getElementsByClassName("intro");
    //finding html elements by CSS selectors : document.querySelectorAll("p.intro");

// THree things we see here :
    //1. how we access the elements (Accessing the html elements)
    //2.how we modify the properties of attributes(Modifying elements)
    //3.see how we create the new object of html 

//1. Accessing the html element :
const mybody = document.body;
//background-color this is  a kabbab case  change in camel case backgroundColor 
// mybody.style.backgroundColor="beige";
console.log(mybody);

const box2 = document.getElementById("box-2");
console.log(box2);

const divs = document.getElementsByTagName("div");//"p"
console.log(divs);

const boxes = document.getElementsByClassName("box");//"random"
console.log(boxes);


const random = document.querySelector(".container .random");
console.log(random);


//2. Modifying elements:
    // changing html content using innerHTML:
                                            // document.getElementById(id).innerHTML = new HTML;
    //changing html attributes value:
                                    // document.getElementById("myImage").src = "landscape.jpg";
                                    // document.getElementById("p2").style.color ="blue";
    //modifying class in Html:
                                // element.classList.add("mystyle");
                                //element.classList.remove("mystyle");
                                //element.classList.toggle("mystyle");


const box3 = document.getElementById("box-3");
// box1.innerHTML = "hello world";
// box1.innerHTML = "<h1>hello</h1>"       


box3.style.backgroundColor ="pink";

// box3.classList.add('round-border');
const boxess = document.getElementsByClassName("box");

for (let index = 0; index <boxess.length; index++) {
    
    boxess[index].classList.add('round-border');
}



//3. creating and Appending of HTML :
                            // we can create a new element using the createElement() method of the document . We can append this new element (node) inside any other element 

            // syntax:
                    // const para = document.createElement("p");
                    //const element = document.getElementById("div");
                    //element.appendChild(para);

// it is a good practice if we want to access anything in the js then use id  

const para =document.createElement('p');
para.innerText = "this is the new text";
para.classList.add('box');
para.style.backgroundColor = "beige";
const Container = document.getElementById("container");
Container.appendChild(para);

