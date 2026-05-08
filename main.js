let swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
    },

});


// handel conter down 
const targetDate = new Date("2026-05-24 20:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "تم الحدث";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('tagen').innerHTML = days;
    document.getElementById('stunden').innerHTML = hours;
    document.getElementById('minuten').innerHTML = minutes;
    document.getElementById('second').innerHTML = seconds;

}, 1000);


let kareem = document.querySelector('.kareem')

setInterval(() => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    kareem.style.color = `rgb(${r} ${g} ${b})`

}, 2000)

let ul = document.querySelector('ul');

let toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
    e.target.classList.toggle('open')// the current toggle not ((this)) hier 
    ul.classList.toggle('open')
})

// Hide Counter

let countdown = document.getElementById('countdown')
let cancel = document.getElementById('cancel')


cancel.addEventListener('click', () => {
    countdown.classList.add('hide')
})
