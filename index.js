// Created At 07:44 - 12 May 2024
// Inspired by https://amanhex.github.io/startpage/

// Documents
const greetH1 = document.getElementById('greet');
const dateH2 = document.getElementById('date');

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
