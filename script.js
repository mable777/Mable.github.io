document.addEventListener('DOMContentLoaded', function () {
    const audio = document.querySelector('audio');
    audio.play().catch(e => {
        document.addEventListener('click', function playAudio() {
            audio.play();
            document.removeEventListener('click', playAudio);
        });
    });
});



const track = document.getElementById('track');
const indicators = document.querySelectorAll('.carousel-indicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


let currentIndex = 0;
const slideCount = document.querySelectorAll('.carousel-slide').length;


function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
}


function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateCarousel();
}


prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

updateCarousel();

function mypopup2() {
    var mywindow = window.open("popup.html", "mywindow", "location=1,status=1,scrollbars=1");
    mywindow.moveTo(0, 0);
}

window.addEventListener("wheel", (e) => {
    const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
    const scrollPosition = window.scrollY + 1;
    const sectionHeight = window.innerHeight;
    let currentSection = Math.floor(scrollPosition / sectionHeight) + 1;
    if (scrollDirection === 'down') {
        currentSection++;
    } else {
        currentSection--;
    }
    const section = document.getElementById("page" + currentSection);
    const scene2Img = section.querySelector('.scene3-content');
    scene2Img && scene2Img.classList.remove('active');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (currentSection === 4 || currentSection === 5) {
            scene2Img && scene2Img.classList.add('active');
        }
    }
});