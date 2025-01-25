const accordions = document.querySelectorAll('.Accordion')
// forEach takes callback function and inside it it pass current element 
accordions.forEach(Accordion =>{
    const icon = Accordion.querySelector('.icon');
    const answer = Accordion.querySelector('.answer');

    Accordion.addEventListener('click',() =>{
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');

        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight= null;
        }else{
            icon.classList.add('active');
            answer.style.maxHeight= answer.scrollHeight + 'px';
        }
    })
})