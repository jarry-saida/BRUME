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
let totalPrix = 0;
let reserve = [];
function CalculetotalPrix() {
    totalPrix = 0;
    reserve = [];
    const optionChoix = document.querySelectorAll(".option input:checked");
    optionChoix.forEach(function(opt) {
        let prix;
        if (opt.name === "supplement") {
            prix = config.supplements[opt.value].price;
        } else {
            prix = config[opt.name][opt.value.toLowerCase()].price;
        }
        totalPrix += prix;
        reserve.push({
            name: opt.value,
            PrixReserve: prix
        });
    });
    document.getElementById("total-prix").textContent =`${totalPrix.toFixed(2).replace(".", ",")} DH`;
    console.log(reserve);
}
document.querySelectorAll(".option input").forEach(function(input) {
    input.addEventListener("change", CalculetotalPrix);
});



