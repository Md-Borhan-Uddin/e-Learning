const menuBtn = document.getElementById('mobile-menu')
const sidebarCloseBtn = document.getElementById('close')
const cartIconBtn = document.getElementById('cart-icon')


menuBtn.addEventListener('click',(e)=>{
    const menuCloseBtn = document.getElementById('menu-close')
    e.target.classList.add('hide')
    
    e.target.setAttribute('id','menu-close')
    menuCloseBtn.removeAttribute('id')
    menuCloseBtn.classList.remove('hide')
    document.getElementById('nav').classList.toggle('nav-show')
})


// side bar hide
sidebarCloseBtn.addEventListener('click', ()=>{
    document.getElementById('side-bar').classList.remove('side-bar')
    document.getElementById('side-bar').classList.add('sidebar-hide')
})


// side bar show
cartIconBtn.addEventListener('click', ()=>{
    document.getElementById('side-bar').classList.remove('sidebar-hide')
    document.getElementById('side-bar').classList.add('side-bar')
})



// owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
    
})