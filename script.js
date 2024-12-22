document.addEventListener("DOMContentLoaded", function() {
    const linkBlock = document.querySelector('.link-block');
   
    const hiddenContent = document.querySelector('.hidden-content');

    linkBlock.addEventListener('click', function(event) {
        event.preventDefault(); 
       
        hiddenContent.style.display = 'block'; 
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cubes = document.querySelectorAll('.cube');
    const works = document.querySelector('.works')
    const games = document.querySelector('.games')
    
    works.textContent = 'НАШИ РАБОТЫ';
    games.textContent = '';
     window.addEventListener('scroll', function(){
     
        if (window.scrollY > 500) { 
         
            cubes[2].classList.remove('red');
            cubes[2].classList.add('black');
            
            
            works.textContent = '';
            games.textContent = 'ИГРЫ';
        } else {
           
            cubes[2].classList.remove('black');
            cubes[2].classList.add('red');
            works.textContent = 'НАШИ РАБОТЫ';
            games.textContent = '';
        }
    });
});
function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay1 = document.getElementById('modalOverlay1');
    const modalOverlay2 = document.getElementById('modalOverlay2');
    const modalOverlay3 = document.getElementById('modalOverlay3');
    const modalOverlay4 = document.getElementById('modalOverlay4');
    const closeModal = document.getElementById('closeModal');

 
    function openModal1() {
        modalOverlay1.style.display = 'flex'; 
    }
    function openModal2() {
        modalOverlay2.style.display = 'flex';
    }
    function openModal3() {
        modalOverlay3.style.display = 'flex';
    }
    function openModal4() {
        modalOverlay4.style.display = 'flex';
    }


    
    function closeModalFunction() {
        modalOverlay1.style.display = 'none'; 
        modalOverlay2.style.display = 'none';
        modalOverlay3.style.display = 'none';
        modalOverlay4.style.display = 'none';
    }

 
    const moreLinks1 = document.querySelectorAll('.more1');
    const moreLinks2 = document.querySelectorAll('.more2');
    const moreLinks3 = document.querySelectorAll('.more3');
    const moreLinks4 = document.querySelectorAll('.more4');


    moreLinks1.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            openModal1(); 
        });
    });
    moreLinks2.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            openModal2(); 
        });
    });
    moreLinks3.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            openModal3(); 
        });
    });
    moreLinks4.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            openModal4(); 
        });
    });


    closeModal.addEventListener('click', closeModalFunction);


    modalOverlay1.addEventListener('click', function(event) {
        if (event.target === modalOverlay1) {
            closeModalFunction();
        }
    });
    modalOverlay2.addEventListener('click', function(event) {
        if (event.target === modalOverlay2) {
            closeModalFunction();
        }
    });
    modalOverlay3.addEventListener('click', function(event) {
        if (event.target === modalOverlay3) {
            closeModalFunction();
        }
    });
    modalOverlay4.addEventListener('click', function(event) {
        if (event.target === modalOverlay4) {
            closeModalFunction();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const project = document.querySelector('.project');
   
    const hiddenContent = document.querySelector('.hidden-content2');

    project.addEventListener('click', function(event) {
        event.preventDefault();
       
        hiddenContent.style.display = 'block'; 
    });
});
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;



document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; 
   
    updateSlider();
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateSlider();
   
});

function updateSlider() {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = 'translateX(-' + currentIndex * (100 / 3) + '%)';
    
}
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
    button1.disabled = true;
    button2.disabled = false;
});

button2.addEventListener('click', () => {
    button2.disabled = true;
    button1.disabled = false;
});