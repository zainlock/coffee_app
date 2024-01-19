let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active'); 
    item.classList.remove ('active');
    form.classList.remove('active'); 
}
let item=document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    item.classList.toggle('active');
    navbar.classList.remove('active');
    form.classList.remove('active'); 
}
let form=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    form.classList.toggle('active');
    navbar.classList.remove('active');
    item.classList.remove ('active'); 
}
window.onscroll=()=>{
    navbar.classList.remove('active');
    item.classList.remove ('active');
    form.classList.remove('active'); 
}
