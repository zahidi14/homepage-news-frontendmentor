const humburg = document.querySelector('.respBtn');
const menu = document.querySelector('.menu');
const close = document.querySelector('.x');

function push(){
    console.log("tes");
    // menu.style.display = "block";
    if (menu.classList.contains('hide') && close.classList.contains('a')){
        menu.classList.remove('hide');
        close.classList.remove('a');
        humburg.classList.add('a');
        
    }else{
        menu.classList.add('hide');
        close.classList.add('a');
        humburg.classList.remove('a');
    }
}
console.log("cokii");