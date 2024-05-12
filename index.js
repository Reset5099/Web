// Created At 07:44 - 12 May 2024
// Inspired by https://amanhex.github.io/startpage/

// Documents
const greetH1 = document.getElementById('greet');
const dateH2 = document.getElementById('date');
const searchInp = document.getElementById('search');

// Date
setInterval(() => {
    const today = new Date();
    const hour = today.getHours();

    greetH1.innerHTML = "Good " + (hour<12 && "Morning" || hour<18 && "Afternoon" || "Evening");

    const time = Intl.DateTimeFormat('en-GB', {
        timeStyle: 'medium'
    }).format(today);

    const date = Intl.DateTimeFormat('en-GB', {
        dateStyle: 'medium'
    }).format(today);

    dateH2.innerHTML = `${time} - ${date}`
}, 1000)

searchInp.addEventListener('keyup', (event) => {
    if (event.key != 'Enter') return

    const value = searchInp.value
    if (value.length <= 0 ) return

    searchInp.value = ''
    window.location = 'https://www.google.com/search?q=' + value
})
