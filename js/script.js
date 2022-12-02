const button = document.getElementById ("btn");

let contatore = 0;

let lock;
button.innerHTML = `#${contatore}`;


button.addEventListener('click', function(){
    lock = false
    if (lock){
        return;
    }
    
    if (contatore === 10){
        lock = true;
    } else {
        contatore++;
    }
    button.innerHTML = `#${contatore}`;
})
