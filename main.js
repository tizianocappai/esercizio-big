// console.log('Scemo chi legge 🙁');

var menuEl = document.getElementById('menu');
const shoppingBagEl = document.getElementById('shopping-bag');

// console.log(menuEl);
var menuShow = false;

function handleMenu() {
	menuShow = !menuShow;
	if (menuShow) shoppingBagEl.classList.remove('hide');
	else {
		shoppingBagEl.classList.add('hide');
	}
}

menuEl.addEventListener('click', handleMenu);


// uguale *ngIf --> FUNZIONE PER RIMUOVERE ELEMENTO HTML DAL DOM

const linkContainer = document.getElementById('link-container');

window.addEventListener('resize', checkWindow);

/* window.onload = function() { // equivale window.addEventListener('load', (event) => {

    if(window.innerWidth <= 584) linkContainer.innerHTML = "";
	else {
		linkContainer.innerHTML = "ciao"
	}
}; */

/* come ngOnInit */
document.addEventListener("DOMContentLoaded", checkWindow);

function checkWindow() {
	if(window.innerWidth <= 584) linkContainer.innerHTML = "";
	else {
		linkContainer.innerHTML = "ciao"
	}
}