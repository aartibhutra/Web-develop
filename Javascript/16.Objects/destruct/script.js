const course = {
    name:" js in hindi",
    price:"2222",
    Instructor : "Aarti"
}
// course.Instructor// one way to print the object value 


// second way to print the object value as a cleaner way 
// const {Instructor} = course
const {Instructor : ins} = course// we can rewrite the value of object 
console.log(ins);



// Json:

// syntax : 
            // like a object format :
            // {
            //     "key":"value"
            // }

            // and also a array format :
            // [
            //     {},
            //     {},
            //     {}
            // ]


