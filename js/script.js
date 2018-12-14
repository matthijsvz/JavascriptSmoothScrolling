let index = 0; // link aangeven welke active moet zijn voor de oogjes
let main = document.querySelector('.inhoud');
let links = document.querySelectorAll('.nav__item');
let allLinksArr =[];
links.forEach( (item) => {
    item.addEventListener('click', (e) =>{
        index = allLinksArr.indexOf(item);
        activate(index);
    });
    allLinksArr.push(item);
});
const arrowLeft  = document.querySelector('.nav__arrow--left');
const arrowRight = document.querySelector('.nav__arrow--right');
const activate   = (num) => {
    // verwijder actieve stutussen de linkjes
    deleteActive();
    // Toon of verwijder arrows 
    showHiddenArrows();
    // link num activeren
    allLinksArr[num].classList.add('nav--active');
    // num voor schuiven
    main.style.marginLeft = (-100*num) + 'vw';
}

const deleteActive = () => {
    allLinksArr.forEach( (item) => {
        item.classList.remove('nav--active');
    })
}

// script voor pijlen
// functie om de volgende sectie te activeren
const next = () => {
    if ( index < allLinksArr.length-1) {
        index++;
    } else {
        index = 0;
    }
    activate(index);
}
const previous = () => {
if ( index>0 ) {
    index--;
} else {
    // de index mag nooit onder de 0 komen 
    index =   allLinksArr.length-1;
}
  activate(index);
}
const showHiddenArrows = () => {
    if ( index == 0 ) {
        arrowLeft.style.display = 'none';
    } else { arrowLeft.style.display = 'block'}

    if (index == allLinksArr.length -1 ) {
        arrowRight.style.display = 'none';
    } else {
        arrowRight.style.display = 'block'
    }
}

arrowRight.addEventListener('click', next);
arrowLeft.addEventListener('click', previous);

// keyboard events 
document.addEventListener('keyup', (e) => {
    if( e.keycode == 39 || e.keyCode == 32) {
        next();
    }
    if (e.keyCode == 37 ) {
        previous();
    }
})
// Swipe events toevoegen met pute-swipe library
document.addEventListener('swiped-left', previous);
document.addEventListener('swiped-right', next);

// bij de start eerste item
activate(index);
