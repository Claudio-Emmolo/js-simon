const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let time = 0;

let = startClicked = true;

tempo.innerHTML = "00"

let timer;


start.addEventListener('click', function(){
    if (startClicked){
        startClicked = false;
    timer = setInterval(function(){
        startClicked = false;
        time++;
        tempo.innerHTML = time
    }, 100);
    }
})


pause.addEventListener('click', function(){
    clearInterval(timer);
    startClicked = true;
})

reset.addEventListener('click', function(){
    time = 0;
    tempo.innerHTML = "00";
})
