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
    e.target.classList.toggle('open')// the current toggle not this hier 
    ul.classList.toggle('open')
})

// Hide Counter

let countdown = document.getElementById('countdown')
let cancel = document.getElementById('cancel')


cancel.addEventListener('click', () => {
    countdown.classList.add('hide')
})

// // creating
let name = document.getElementById('name')
let message = document.getElementById('message')
let form = document.querySelector('form')
let tbody = document.querySelector('tbody')


// small validation

// if ((name.value).length < 4) {
//     window.prompt(`${name.value}  يجب الا يقل سمك عن 4 حرووف`)
// }



let data

if (localStorage.getItem('users') == null) {
    data = [];
} else {
    data = JSON.parse(localStorage.getItem('users'))
}

form.onsubmit = function (e) {
    e.preventDefault()
    messegeDetils = {
        userName: name.value,
        userMesege: message.value
    }

    data.push(messegeDetils)
    displaing()

    localStorage.setItem('users', JSON.stringify(data))
}


// Readeing(displaing)...

displaing()
function displaing() {

    let item = '';

    for (let i = 0; i < data.length; i++) {
        item += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${data[i].userName}</td>
                    <td> ${data[i].userMesege} </td>
                    </tr>
                    `
                    // <td>
                    //     <button onclick = deleteItem(${i}) class="btn_del">احذف</button>
                    // </td>
    }

    tbody.innerHTML = item

    clearInputs()

}


function deleteItem(i) {
    data.splice(i, 1)
    localStorage.setItem('users', JSON.stringify(data))

    displaing()
}


function clearInputs() {
    name.value = ''
    message.value = ''
}



let toTop = document.getElementById('toTop');


window.addEventListener('scroll', () => {
    if (scrollY > 30) {
        toTop.classList.add('show')
    } else {
        toTop.classList.remove('show')
    }
})


toTop.addEventListener('click', function () {


    this.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})