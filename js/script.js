const button = document.getElementById ("btn");

let contatore = 0;

let lock;

button.innerHTML = `#${contatore}`;

button.addEventListener('click', function(){
    lock = false

    if (contatore == 10){
        lock = true;
        button.classList.add("crono-off");
        setTimeout(() =>{
            lock = false;
            contatore = 0;
        }, 3000)
    } else {
        button.classList.remove("crono-off");
        contatore++;
        button.innerHTML = `#${contatore}`;
    }
})