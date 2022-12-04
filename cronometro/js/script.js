const secEle = document.getElementById('sec');
const minEle = document.getElementById('min');
const hoursEle = document.getElementById('hours');


const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

let sec = 0;

let min = 0;

let hours = 0;

let = startClicked = true;

secEle.innerHTML = "00"

minEle.innerHTML = "00"

hoursEle.innerHTML = "00"


let timer;


start.addEventListener('click', function(){
    if (startClicked){
        startClicked = false;
    timer = setInterval(function(){
        startClicked = false;
        sec++;
        secEle.innerHTML = sec;
        addZeroBefore(sec, secEle);

        if (sec === 60){
            sec = 0;
            min += 1;
            minEle.innerHTML = min;
            addZeroBefore(min, minEle);
        }

        if (min === 60){
            min = 0;
            hours += 1;
            hoursEle.innerHTML = hours;
            addZeroBefore(hours, hoursEle);
        }
        
    }, 1000);

    }
})


pause.addEventListener('click', function(){
    clearInterval(timer);
    startClicked = true;
})

reset.addEventListener('click', function(){
    sec = 0;
    min = 0;
    hours = 0;
    secEle.innerHTML = "00";
    minEle.innerHTML = "00";
    hoursEle.innerHTML = "00";

})



// --------FUNCTIONS----------

function addZeroBefore(time, timeElement) {
    if (time < 10){
        timeElement.innerHTML = "0"+time;
    }
}