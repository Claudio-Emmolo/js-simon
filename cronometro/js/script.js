const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let time = 0;

tempo.innerHTML = "00"

let timer;

start.addEventListener('click', function(){
    timer = setInterval(function(){
        time++;
        tempo.innerHTML = time
    }, 10);
})

pause.addEventListener('click', function(){
    clearInterval(timer);
})

reset.addEventListener('click', function(){
    time = 0;
    tempo.innerHTML = "00";
})
