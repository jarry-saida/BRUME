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
    // if (prices) {
    //     prices[i].textContent = `${coffeeCart[i].price.toFixed(2).replace(".", ",")} DH`;
    // }
    if (Quantity) {
        Quantity[i].textContent = `${coffeeCart[i].quantity}`;
    }
    // console.log(names);
    // console.log(prices);
    // console.log(Quantity);
    SousPrix();
}
const Add = document.querySelectorAll('.add');
const Minus = document.querySelectorAll('.minus');
const Ajouter = document.getElementById("ajouter");
const Quantity = document.querySelectorAll('.quantity');
const S_Prix = document.querySelectorAll(`.price`);
const buttonModal = document.getElementById("retourModal");
const dialog = document.getElementById("quickAddModal");

// let CNT;

function initiateBtnsEvents() {
    for (let i = 0; i < Add.length; i++) {
        Add[i].addEventListener("click", plus);
        Minus[i].addEventListener("click", moins);
    }
}
// console.log(Add);
// console.log(Minus);
let Qnt;
function plus(e) {
    let targetbutton = e.target;
    // console.log(targetbutton);
    let displayPruductQuantity = document.getElementById(`${targetbutton.dataset.x}`);
    // console.log(displayPruductQuantity);
    displayPruductQuantity.textContent++;

    SousPrix();
}

// console.log(Quantity);
function moins(e) {
    let targetbutton = e.target;
    // console.log(targetbutton);
    let displayPruductQuantity = document.getElementById(`${targetbutton.dataset.y}`);

    if (displayPruductQuantity.textContent <= 1) {
        return;
    } else {
        displayPruductQuantity.textContent--;
    }
    //    console.log("Q" ,Qnt );

    SousPrix();

    // console.log(displayPruductQuantity.textContent);
}
initiateBtnsEvents();
// console.log(Qnt);

// let prix;
// console.log(S_Prix);

function SousPrix() {
    const Produits = document.querySelectorAll(".produit");
    // console.log(Produits);

    let total = 0;
    Produits.forEach((produit, i) => {
        const price = coffeeCart[i].price;
        // console.log(price);

        const quantity = Number(produit.querySelector(".quantity").textContent);
        // console.log(produit.querySelector(".quantity"));
        // console.log(quantity);
        // console.log(price * quantity);

        const sous = price * quantity;
        // console.log(sous);

        produit.querySelector(".price").textContent = `${sous.toFixed(2).replace(".", ",")} DH`;
        // console.log(produit.querySelector(".price"));

        total += sous;

    });

    document.getElementById("total").textContent = `${total.toFixed(2).replace(".", ",")} DH`;






    // coffeeProducts.forEach((opt) => {

    //     let Price = opt.price;

    //     // console.log(Price);
    //     // console.log(Quantity);
    //     // console.log(Price * Quantity);

    //     for (let i = 0; i < S_Prix.length; i++) {
    //             let sous = S_Prix[i].textContent ;
    //             sous = Price * Qnt ;
    //             console.log(sous);
    //             S_Prix[i].textContent = `${sous.toFixed(2).replace(".",",")} DH`;
    //     }   
    // });

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







buttonModal.addEventListener("click", () => {
    dialog.close();
});
Ajouter.addEventListener("click", () => {
    dialog.showModal();
});
function affichage(coffeeProducts) {
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
affichage(coffeeProducts);
SousPrix();
const recherche = document.querySelector(`input[name="search"]`);
// console.log(recherche);
const liste_pro = document.querySelectorAll(`.name`);
// console.log(liste_pro);

recherche.addEventListener("input", Recherche);
function Recherche() {
    coffeeProducts.forEach(() => {
        let value = recherche.value.toLocaleLowerCase();
        // console.log(value);
        // if (liste_pro.name.toLowerCase().includes("value")){
        //     affichage();
        // }
        // 
        // let name = opt.name.toLocaleLowerCase();
        // console.log(name);
        const result = coffeeProducts.filter((opt) => {


            // console.log(opt.name.toLocaleLowerCase().includes(value));
            return opt.name.toLocaleLowerCase().includes(value);




            // // console.log("iiiiiiiiii");
            // liste_pro.innerHTML += `

            //             <div class="divcoffeProduct">
            //             <img src="${opt.image}">
            //                 <span class="name">${opt.name}</span>
            //                 <span class="price"> ${opt.price.toFixed(2).replace(".", ",")} DH</span>

            //                 <button id="ajouterP">ajouter</button>
            //             </div>
            // `

        });


        affichage(result);
        // console.log(result);








        // if(name.includes(value)){

        //     liste_pro.innerHTML = "";

        //     console.log("iiiiiiiiii");
        //     liste_pro.innerHTML += `

        //                 <div class="divcoffeProduct">
        //                 <img src="${opt.image}">
        //                     <span class="name">${opt.name}</span>
        //                     <span class="price"> ${opt.price.toFixed(2).replace(".", ",")} DH</span>

        //                     <button id="ajouterP">ajouter</button>
        //                 </div>
        //     `
        // }


    });

}
const AjouterP = document.querySelectorAll(`#ajouterP`);
// console.log(AjouterP);
for (let i = 0; i < AjouterP.length; i++) {
    AjouterP[i].addEventListener("click", ajouterProduit);
}

function ajouterProduit(){
    let name;
    let nameChoix;
    coffeeCart.forEach((opt)=>{
        name = opt.name;
        // console.log(name);
        const choix = document.querySelectorAll(`.name`);
        // console.log(choix);
        for(let i = 0; i < choix.length ; i++){
            nameChoix = choix[i].textContent;
            // console.log(nameChoix);
        }   
        if(name == nameChoix){
        console.log("yyy");
    }
    });













    dialog.close();
}











