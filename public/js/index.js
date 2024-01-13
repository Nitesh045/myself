console.log('hello')

let nav= document.getElementById('nav');


document.addEventListener('scroll',()=>{
    if(window.scrollY>0){
        nav.classList.add('scrolled');
    }else{
       nav.classList.remove('scrolled'); 
    }
});



  