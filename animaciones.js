const images = document.querySelectorAll('.figure');

function triggerAnimation(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 1. Obtenemos el ID (ej: "nosotros-section")
            const fullId = entry.target.id;
            
            // 2. Le quitamos el "-section" para que nos quede solo "nosotros"
            const navId = fullId.replace('-section', '');

            // 3. Limpiamos todos los <li> de la navbar
            document.querySelectorAll('.nav-links li').forEach(li => {
                li.classList.remove('scrolled-active');
            });

            // 4. Buscamos el <li> en la navbar que tiene ese ID exacto
            const activeNavItem = document.getElementById(navId);
            if (activeNavItem) {
                activeNavItem.classList.add('scrolled-active');
            }
        }
    });
}


const options = {
    root: null,
    rootMargin: '0px',
    threshold: .6 // Se activa cuando la sección está 100% visible
}

const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach(image => {
    observer.observe(image);
});


/* 






const images1 = document.querySelectorAll('.figure');


function triggerAnimation(entries){
    
    entries.forEach(entry =>{
        const image = entry.target.querySelector('#figure2');
        image.classList.toggle('unset', entry.isIntersecting);
    });
        
}

const options1 ={
    root: null,
    rootMargin: '0px',
    threshold: 1
}

const observer1 = new IntersectionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
});











const images2 = document.querySelectorAll('.figure');


function triggerAnimation(entries){
    
    entries.forEach(entry =>{
        const image = entry.target.querySelector('#figure3');
        image.classList.toggle('unset', entry.isIntersecting);
    });
        
}

const options2 ={
    root: null,
    rootMargin: '0px',
    threshold: 1
}

const observer2 = new IntersectionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
});

*/



const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navLinks.classList.toggle('active');
});