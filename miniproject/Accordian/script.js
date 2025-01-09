const accordians = document.querySelectorAll('.Accordian')
// forEach takes callback function and inside it it pass current element 
accordians.forEach(Accordian =>{
    const icon = Accordian.querySelector('.icon');
    const answer = Accordian.querySelector('.answer');

    Accordian.addEventListener('click',() =>{
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