

let link = document.querySelectorAll('.container .nav-bar ul li a');
let menu = document.querySelector('.container .nav-bar ul');
let Mbutton = document.querySelector('.menu-button');
let MbuttonClose = document.querySelector('.menu-button-close');
let  windowSize = window.screen.width;

link.forEach(element=>{
    element.addEventListener('click',()=>{
        clearActiveClass();
        element.classList.add('active');
        menu.classList.remove('open');

      

        if(windowSize >= 1000){
            MbuttonClose.style.display = "none";
            Mbutton.style.display = "none";
        }else{
            MbuttonClose.style.display = "none";
            Mbutton.style.display = "block";
        }
       
    })
})



const clearActiveClass =()=>{
    link.forEach(element=>{
        element.classList.remove('active');
    })
}

Mbutton.addEventListener('click',()=>{
    menu.classList.add('open');
    Mbutton.style.display = "none";
    MbuttonClose.style.display = "block";
})

MbuttonClose.addEventListener('click',()=>{
    menu.classList.remove('open');
    MbuttonClose.style.display = "none";
    Mbutton.style.display = "block";
})
