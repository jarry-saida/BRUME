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
        // console.log(ckey);
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
    input.addEventListener("change", function() {
        CalculetotalPrix();
        afficherLesChoix();
    });
});

// document.querySelectorAll(".option input").forEach(function(input) {
//     input.addEventListener("change", CalculetotalPrix);
// });





const ajouterPanier = document.getElementById("ajouter-panier");


const Page1 = document.getElementById("page1");
const Page2 = document.getElementById("page2");



ajouterPanier.addEventListener("click",allerPage2);
// function affichage(){
//     CalculetotalPrix();
//     Page1.style.display="none";
//     Page2.style.display="block";
//     remplir();
// }
const Info = document.getElementById("info");

const lastTotal =document.getElementById("last-total");




function remplir() {
Info.innerHTML = "";
description.forEach(function(opt){
        Info.innerHTML+=`
                    <div class="facture">
                        <p>${opt.categorie} . ${opt.name} </p>
                        <p>${opt.PrixChoix} DH</p>
                    </div>
    `
});
    lastTotal.textContent= `${totalPrix.toFixed(2).replace(".", ",")} DH`;

}

const  retour = document.querySelectorAll('.vers1');
const  retour2 = document.querySelectorAll('.vers2');
retour.forEach(function(lien) {
    lien.addEventListener("click", function (){
    Page1.style.display="block";
    Page2.style.display="none";
});
});
retour2.forEach(function(lien) {
    lien.addEventListener("click", allerPage2);
});
// const veRs02 = document.getElementsByClassName('vers02');

// veRs02[0].addEventListener("click", function() {
//     console.log("test2");
//     Page1.style.display = "none";
//     Page2.style.display = "block";
// });

// const veRs01 = document.getElementsByClassName('vers01');

// veRs01[0].addEventListener("click", function() {
//       console.log("test1");
//     Page1.style.display = "block";
//     Page2.style.display = "none";
// });
const BRUME = document.querySelector('.vers01');

BRUME.addEventListener("click", function() {
    if (Page1.style.display !== "none" && allerPage2()) {
        Page1.style.display = "none";
        Page2.style.display = "block";
    } else {
        Page1.style.display = "block";
        Page2.style.display = "none";
    }
});


function allerPage2() {
    const baseChoisie = Page1.querySelector('input[name="base"]:checked');
    const tailleChoisie = Page1.querySelector('input[name="taille"]:checked');
    const laitChoisi = Page1.querySelector('input[name="lait"]:checked');

    if (!baseChoisie || !tailleChoisie || !laitChoisi) {
        alert("Veuillez choisir au moins une option !");
        return;
    }

    CalculetotalPrix();
    remplir();

    Page1.style.display = "none";
    Page2.style.display = "block";
}

const lesChoix = document.getElementById("leschoix");
function afficherLesChoix() {
    const optionChoisie = document.querySelectorAll(".option input:checked");

    lesChoix.textContent = "";

    optionChoisie.forEach(function(opt) {
        let choix;

        if (opt.name === "supplement") {
            choix = config.supplements[opt.value];
        } else {
            choix = config[opt.name][opt.value.toLowerCase()];
        }

        if (choix) {
            lesChoix.textContent += choix.name + " · ";
        }
    });

    lesChoix.textContent = lesChoix.textContent.replace(/ · $/, "");
}
const panier = document.getElementById("panier");
panier.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/Checkout%20.html";
});






