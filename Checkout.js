// 1. Le tableau global (Catalogue complet incluant les accessoires)
const coffeeProducts = [
    { id: "c1", name: "Espresso Intense", category: "Base", price: 2.50, image: "espresso.jpg" },
    { id: "c2", name: "Cappuccino Mousseux", category: "Classique", price: 4.00, image: "cappuccino.jpg" },
    { id: "c3", name: "Latte Caramel", category: "Gourmand", price: 4.50, image: "latte.jpg" },
    { id: "c4", name: "Flat White", category: "Classique", price: 3.80, image: "flatwhite.jpg" },
    { id: "c5", name: "Iced Matcha Latte", category: "Froid", price: 5.00, image: "matcha.jpg" },
    { id: "c6", name: "Cold Brew", category: "Froid", price: 4.20, image: "coldbrew.jpg" },
    { id: "c7", name: "Cookie Pépites", category: "Snack", price: 2.00, image: "cookie.jpg" },
    { id: "c8", name: "Mug Isotherme Noir", category: "Accessoire", price: 15.00, image: "mug.jpg" },
    { id: "c9", name: "Filtres Papier V60 (x100)", category: "Accessoire", price: 6.50, image: "filters.jpg" },
    { id: "c10", name: "Tote Bag 'Coffee Lover'", category: "Accessoire", price: 12.00, image: "totebag.jpg" }
];

// 2. Le tableau des produits dans le panier par défaut (avec un accessoire)
let coffeeCart = [
    { id: "c2", name: "Cappuccino Mousseux", price: 4.00, quantity: 2, image: "cappuccino.jpg" },
    { id: "c3", name: "Latte Caramel", price: 4.50, quantity: 1, image: "latte.jpg" },
    { id: "c8", name: "Mug Isotherme Noir", price: 15.00, quantity: 1, image: "mug.jpg" }
];



for (let i = 0; i < coffeeCart.length; i++) {
    const names = document.querySelectorAll('.name');
    const prices = document.querySelectorAll('.price');
    const Quantity = document.querySelectorAll('.quantity');

    if (names) {
        names[i].textContent = `${coffeeCart[i].name}`;
    }
    if (prices) {
        prices[i].textContent = `${coffeeCart[i].price.toFixed(2).replace(".", ",")} DH`;
    }
    if (Quantity) {
        Quantity[i].textContent = `${coffeeCart[i].quantity}`;
    }
    // console.log(names);
    // console.log(prices);
    // console.log(Quantity);
}
const Add = document.querySelectorAll('.add');
const Minus = document.querySelectorAll('.minus');
const Ajouter = document.getElementById("ajouter");
const Quantity = document.querySelectorAll('.quantity');

// let CNT;

function initiateBtnsEvents() {
    for (let i = 0; i < Add.length; i++) {
        Add[i].addEventListener("click", plus);
        Minus[i].addEventListener("click", moins);
    }
}
// console.log(Add);
// console.log(Minus);
function plus(e) {
    let targetbutton = e.target;
    // console.log(targetbutton);
    let displayPruductQuantity = document.getElementById(`${targetbutton.dataset.x}`);
    // console.log(displayPruductQuantity);
    displayPruductQuantity.textContent++;

}

console.log(Quantity);
function moins(e) {
    let targetbutton = e.target;
    // console.log(targetbutton);
    let displayPruductQuantity = document.getElementById(`${targetbutton.dataset.y}`);

    if (displayPruductQuantity.textContent <= 1) {
        return;
    } else {
        displayPruductQuantity.textContent--;
    }
    // console.log(displayPruductQuantity.textContent);
}
initiateBtnsEvents();

const S_Prix = document.querySelectorAll(`.price`);
// let prix;
// console.log(S_Prix);

function SousPrix() {

    coffeeCart.forEach((opt) => {
        
        let Price = opt.price;
        let Quantity = opt.quantity;
        // console.log(Price);
        // console.log(Quantity);

        for (let i = 0; i < S_Prix.length; i++) {

        }
    });



    // for (const key in S_Prix) {

    //     // S_Prix[key].textContent;
    //     // console.log(S_Prix[key].textContent);
    //     let quantityPro = document.querySelectorAll(`.quantity`);
    //     quantityPro.forEach(function () {
    //     S_Prix[key].innerHTML =`
    //                 <small class="sousprix">Sous Prix :</small>
    //                 <span class="price"></span>

    //     `
    //     });
    // }
    // console.log(prix);

}
SousPrix();






const buttonModal = document.getElementById("retourModal");
const dialog = document.getElementById("quickAddModal");
buttonModal.addEventListener("click", () => {
    dialog.close();
});
Ajouter.addEventListener("click", () => {
    dialog.showModal();
});
function affichage() {
    const liste = document.getElementById("Produits");
    liste.innerHTML = "";
    coffeeProducts.forEach((opt) => {

        liste.innerHTML += `
         
                    <div class="divcoffeProduct">
                    <img src="${opt.image}">
                        <span class="name">${opt.name}</span>
                        <span class="price"> ${opt.price.toFixed(2).replace(".", ",")} DH</span>
                    
                        <button id="ajouterP">ajouter</button>
                    </div>
        `
    });
}
affichage();











