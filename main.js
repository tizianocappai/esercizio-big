console.log('Scemo chi legge 🙁');

var menuEl = document.getElementById("menu");
const shoppingBagEl = document.getElementById("shopping-bag");

console.log(menuEl);
var menuShow = false;

function handleMenu() {
    menuShow = !menuShow;
    if(menuShow)
        shoppingBagEl.classList.remove("hide");
    else {
        shoppingBagEl.classList.add("hide");
    }
}

menuEl.addEventListener("click", handleMenu);


