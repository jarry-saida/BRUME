const config = {
  base: {
    espresso: { name: "Espresso", price: 18 },
    filtre: { name: "Filtre", price: 16 }
  },
  taille: {
    s: { name: "S · 150 ml", price: 0 },
    m: { name: "M · 250 ml", price: 4 },
    l: { name: "L · 350 ml", price: 8 }
  },
  lait: {
    vache: { name: "Lait de vache", price: 0 },
    avoine: { name: "Lait d'avoine", price: 4 },
    amande: { name: "Lait d'amande", price: 5 }
  },
  supplements: {
    caramel: { name: "Caramel", price: 3 },
    vanille: { name: "Vanille", price: 3 }
  }
};


// const form = document.getElementsByClassName('choix');
// const totalPrix = document.getElementById('total-prix');


for (const ckey in config) {
    for (const key in config[ckey]){
        const names = document.querySelector(`.${ckey}-${key}-name`);
        const prices = document.querySelector(`.${ckey}-${key}-price`);
        console.log(ckey)
        if(names){
            names.textContent=config[ckey][key].name;
        }
        if(prices){
            prices.textContent = config[ckey][key].price === 0 ? "Inclus" : `${config[ckey][key].price.toFixed(2).replace(".", ",")} DH`;
        }
    }
}
let totalPrix;
let description = [];
function CalculetotalPrix() {
    totalPrix = 0;
    description = [];
    const optionChoix = document.querySelectorAll(".option input:checked");
    optionChoix.forEach(function(opt) {
        let prix;
        if (opt.name === "supplement") {
            prix = config.supplements[opt.value].price;
        } else {
            prix = config[opt.name][opt.value.toLowerCase()].price;
        }
        totalPrix += prix;
        description.push({
            categorie:opt.name,
            name: opt.value,
            PrixChoix: prix
        });
    });
        // console.log(categorie)

    // console.log(totalPrix)
    document.getElementById("total-prix").textContent = `${totalPrix.toFixed(2).replace(".", ",")} DH`;
}
document.querySelectorAll(".option input").forEach(function(input) {
    input.addEventListener("change", CalculetotalPrix);
});





const ajouterPanier = document.getElementById("ajouter-panier");


const Page1 = document.getElementById("page1");
const Page2 = document.getElementById("page2");



ajouterPanier.addEventListener("click",affichage);
function affichage(){
    Page1.style.display="none";
    Page2.style.display="block";
    remplir();
}
const Info = document.getElementById("info");

const lastTotal =document.getElementById("last-total");


function remplir() {

description.forEach(function(opt){
            console.log(opt.categorie);

        Info.innerHTML+=`
                    <div class="facture">
                        <p>${opt.categorie} . ${opt.name}</p>
                        <p>${opt.PrixChoix} DH</p>
                    </div>
    `
});
    lastTotal.textContent= `${totalPrix.toFixed(2).replace(".", ",")} DH`;

}

