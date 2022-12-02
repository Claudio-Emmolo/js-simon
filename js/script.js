const button = document.getElementById ("btn");

let contatore = 0;

let lock;

button.innerHTML = `#${contatore}`;

button.addEventListener('click', function(){
    lock = false

    if (contatore === 10){
        lock = true;

        setTimeout(() =>{
            gameOver = false;
            contatore = 0;
        }, 10000)
    } else {
        contatore++;
        button.innerHTML = `#${contatore}`;
    }
    button.innerHTML = `#${contatore}`;
})