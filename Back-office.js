
const InfoProduit = {
    nom: null,
    prix: null,
    descreption: null,
    image: null,
    grains: null,
    intensity:null,
    température: null,
    tailles: [],
    optionsLait: [],
    suppléments: []
};
const step2 = document.getElementById("step2");
// console.log(step2);
const step3 = document.getElementById("step3");
// console.log(step3);
step2.style.display = "none";
step3.style.display = "none";
const step1 = document.getElementById("step1");
// console.log(step1);
const suivantBtn = document.getElementById("nextBtn");
// console.log(suivantBtn);
const precedentBtn = document.getElementById("previousBtn");
// console.log(precedentBtn);
const submitBtn = document.getElementById("submit");
// console.log(submitBtn);
submitBtn.style.display = "none";
precedentBtn.style.display = "none";
suivantBtn.addEventListener("click", NavigationStep1);

precedentBtn.addEventListener("click", NavigationStep2_3);
function affichageStep1() {
    if (regexStep1()) {
        step2.style.display = "block";
        step3.style.display = "none";
        step1.style.display = "none";
        precedentBtn.style.display = "block";
    }
}

function affichageStep2() {
    step2.style.display = "block";
    step1.style.display = "none";
    step3.style.display = "none";
    precedentBtn.style.display = "block";
    suivantBtn.style.display = "block";
    submitBtn.style.display = "none";
}
function affichageStep3() {
    if (regexStep2()) {
        step2.style.display = "none";
        step1.style.display = "none";
        step3.style.display = "block";
        precedentBtn.style.display = "block";
        suivantBtn.style.display = "none";
        submitBtn.style.display = "block";
    }

}
function NavigationStep1() {
    if (step2.style.display === "none") {
        affichageStep1();
        changeProgress(2);
        // console.log(InfoProduit);


    } else {
        affichageStep3();
        changeProgress(3);

    }
}
function NavigationStep2_3() {
    if ((step3.style.display === "block")) {
        affichageStep2();
        changeProgress(2);

    } else if ((step2.style.display === "block") && (step3.style.display === "none")) {
        step2.style.display = "none";
        step1.style.display = "block";
        precedentBtn.style.display = "none";
        changeProgress(1);

    }
}
const checkboxPromotion = document.getElementById("isPromotion");
checkboxPromotion.addEventListener("change", InfoPromotion);
const promotionInfo = document.getElementById("promotion");
// console.log(promotionInfo);
function InfoPromotion() {
    if (checkboxPromotion.checked) {
        promotionInfo.hidden = false;
    } else {
        promotionInfo.hidden = true;
    }
}
const inputName = document.getElementById("productName");
// console.log(inputName);
// inputName.addEventListener("input",regexNom);
const divNom = document.getElementById("divNom");
// inputName.addEventListener("input",regexNom);
function regexNom() {
    const regexNom = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
    const valueNom = inputName.value;// wselt hna 3la 9bel la valeur
    // console.log(valueNom);
    const divNom = document.getElementById("divNom");

    if (regexNom.test(valueNom)) {
        // console.log("nom valide");
        // console.log(InfoProduit);
        InfoProduit.nom = valueNom;
        // console.log(InfoProduit);
        divNom.querySelector("span")?.remove();
        return true;
    } else {
        // console.log("nom invalid");
        divNom.querySelector("span")?.remove();
        const span = document.createElement("span");
        span.textContent = "Vous avez entrer un nom invalide";
        // console.log(span);
        span.style.color = "red";
        // console.log(divNom);
        divNom.appendChild(span);
        // console.log(divNom);
        return false;
    }
}
const inputPrix = document.getElementById("price");
// inputPrix.addEventListener("input",regexPrix);
function regexPrix() {
    const regexPrix = /^(?=.*[1-9])\d+(\.\d{1,2})?$/;
    const valuePrix = inputPrix.value;
    // console.log(valuePrix);
    const divPrix = document.getElementById("divPrix");

    if (regexPrix.test(valuePrix)) {
        // console.log(InfoProduit);
        InfoProduit.prix = valuePrix;
        // console.log(InfoProduit);
        divPrix.querySelector("span")?.remove();

        return true;
    } else {
        // console.log("prix invalid");
        divPrix.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Vous avez entrer un prix invalide";
        // console.log(span);
        span.style.color = "red";
        // console.log(divPrix);
        divPrix.appendChild(span);
        // console.log(divPrix);
        return false;
    }

}
const inputImage = document.getElementById("productImage");
function regexImage() {
    const regexImage = /^https?:\/\/.+\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i;
    const valueImage = inputImage.value;
    // console.log(valueImage);
    const divImage = document.getElementById("divImage");

    if (regexImage.test(valueImage)) {
        divImage.querySelector("span")?.remove();

        InfoProduit.image = valueImage;
        return true;
    } else {
        divImage.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Vous avez entrer un URL invalide";
        span.style.color = "red";
        divImage.appendChild(span);
        return false;
    }
}
const inputPromo = document.getElementById("isPromotion");
// console.log(inputPromo);
const inputPourcentage = document.getElementById("count");
// console.log(inputPourcentage);
function regexPourcentage() {
    const regexPourcentage = /^(100|[1-9]\d?)$/;
    const divPourcentage = document.getElementById("div%");
    divPourcentage.querySelector("span")?.remove();

    const valuePourcentage = inputPourcentage.value;
    // console.log(valuePourcentage);
    if (regexPourcentage.test(valuePourcentage)) {
        divPourcentage.querySelector("span")?.remove();
        return true;
    } else {
        divPourcentage.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Vous avez entrer un pourcentage invalide";
        span.style.color = "red";
        divPourcentage.appendChild(span);
        return false;
    }
}
function regexDate() {


    const divDate = document.getElementById("divDate");
    // console.log(divDate);



    divDate.querySelector("span")?.remove();

    const datenew = new Date();
    // console.log(datenew);
    const inputDate = document.getElementById("endDate");
    //  console.log(inputDate);
    const valueDate = new Date(inputDate.value);
    //  console.log(typeof valueDate);
    //  console.log(valueDate);
    if (valueDate > datenew) {
        // console.log("condition true");
        divDate.querySelector("span")?.remove();
        return true;
    } else {
        // console.log("cnd false");
        divDate.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Vous avez entrer une date invalide";
        span.style.color = "red";
        divDate.appendChild(span);
        return false;
    }
}
function regexPromotion() {

    if (inputPromo.checked) {
        // console.log("checked");


        if (regexDate() & regexPourcentage()) {
            return true;
        } else {
            return false;
        }

    } else {
        // console.log(" non checked");

        return true;
    }
}
function regexStep1() {

    const nom = regexNom();
    const prix = regexPrix();
    const image = regexImage();
    const promo = regexPromotion();

    return nom && prix && image && promo;
}
// function regexStep1(){
//     if ((regexNom() & regexPrix() & regexImage()) | (regexNom() & regexPrix() & regexImage() & regexPromotion())) {
//         return true;
//     }
//     return false;
// }
const circle1 = document.getElementById("circle1");
// console.log(circle1);

const circle2 = document.getElementById("circle2");
// console.log(circle2);

const circle3 = document.getElementById("circle3");
// console.log(circle3);

const text1 = document.getElementById("text1");
// console.log(text1);

const text2 = document.getElementById("text2");
// console.log(text2);

const text3 = document.getElementById("text3");
// console.log(text3);

const line1 = document.getElementById("line1");
// console.log(line1);

const line2 = document.getElementById("line2");
// console.log(line2);
function changeProgress(step) {

    const circles = [circle1, circle2, circle3];
    // console.log(circles);

    const texts = [text1, text2, text3];
    // console.log(texts);

    const lines = [line1, line2];
    // console.log(lines);
    for (let i = 0; i < circles.length; i++) {
        if (i < step) {
            // console.log(circles[i]);

            circles[i].classList.replace("bg-[#E9DCC7]", "bg-[#394B32]");
            circles[i].classList.replace("text-[#796A59]", "text-white");
            // console.log(texts[i]);

            texts[i].classList.replace("text-[#796A59]", "text-[#394B32]");

        } else {
            circles[i].classList.replace("bg-[#394B32]", "bg-[#E9DCC7]");
            circles[i].classList.replace("text-white", "text-[#796A59]");

            texts[i].classList.replace("text-[#394B32]", "text-[#796A59]");
        }
    }
    for (let i = 0; i < lines.length; i++) {
        // console.log(lines[i]);

        if (i < step - 1) {
            lines[i].classList.replace("bg-[#E9DCC7]", "bg-[#394B32]");
        } else {
            lines[i].classList.replace("bg-[#394B32]", "bg-[#E9DCC7]");
        }

    }
}
// changeProgress(3);
// changeProgress(2);
// changeProgress(1);
const selectOrigin = document.getElementById("origin");
// console.log(selectOrigin);

function regexOrigin() {
    const DivOrigin = document.getElementById("DivOrigin");
    // console.log(DivOrigin);

    DivOrigin.querySelector("span")?.remove();
    let value = selectOrigin.value;
    // console.log(value);
    if (value) {
        DivOrigin.querySelector("span")?.remove();

        // console.log("cheked");
        InfoProduit.grains = value;
        // console.log(InfoProduit);
        return true;
    } else {
        // console.log("non cheked");
        DivOrigin.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Il faut choisir un choix";
        span.style.color = "red";
        DivOrigin.appendChild(span);
        return false;
    }
}
const DivIntensity = document.getElementById("DivIntensity");
// console.log(DivIntensity);
const inputIntensity = document.getElementById("intensity");
// console.log(inputIntensity);
function Intensity(){
    let value = inputIntensity.value;
    // console.log(value);
    InfoProduit.intensity = value;
    return true;
}
const fieldsetTenperature = document.getElementById("température");
// console.log(fieldsetTenperature);

const inputChaud = document.getElementById("chaud");
// console.log(inputChaud);
const inputGlase = document.getElementById("glase");
// console.log(inputGlase);
function regexTempérature() {
    fieldsetTenperature.querySelector("span")?.remove();

    
    if (inputChaud.checked || inputGlase.checked) {
        fieldsetTenperature.querySelector("span")?.remove();
        return true;
    }else{
        fieldsetTenperature.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Il faut choisir un choix";
        span.style.color = "red";
        fieldsetTenperature.appendChild(span);
        return false;
    }
}
const fieldsetTailles = document.getElementById("tailles");
// console.log(fieldsetTailles);
const inputSmall = document.getElementById("small");
const inputMedium = document.getElementById("medium");
const inputLarge = document.getElementById("large");


function regexTailles() {
    fieldsetTailles.querySelector("span")?.remove();

    if (inputSmall.checked || inputMedium.checked || inputLarge.checked) {
    fieldsetTailles.querySelector("span")?.remove();
        return true;
    } else {
        fieldsetTailles.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Il faut choisir au moins un choix";
        span.style.color = "red";
        fieldsetTailles.appendChild(span);
        return false;
    }
}
const fieldsetLait = document.getElementById("lait");
// console.log(fieldsetLait);
const inputVache = fieldsetLait.querySelector("#milkVache");
const inputAvoine = fieldsetLait.querySelector("#milkAvoine");
const inputSoja = fieldsetLait.querySelector("#milkSoja");
const inputAmande = fieldsetLait.querySelector("#milkAmande");
// console.log(inputAmande,inputAvoine,inputVache,inputSoja);

function regexLaits() {
    if (inputVache.checked || inputAmande.checked || inputAvoine.checked || inputSoja.checked) {
    fieldsetLait.querySelector("span")?.remove();
        return true;
    } else {
        fieldsetLait.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Il faut choisir au moins un choix";
        span.style.color = "red";
        fieldsetLait.appendChild(span);
        return false;
    }
    
}
const fieldsetSupplements = document.getElementById("supplements");
// console.log(fieldsetSupplements);
const inputVannila = fieldsetSupplements.querySelector("#vanilla");
const inputCaramel = fieldsetSupplements.querySelector("#caramel");
const inputNoisette = fieldsetSupplements.querySelector("#noisette");
// console.log(inputCaramel,inputVannila,inputNoisette);
function regexSupplements() {
    if (inputCaramel.checked || inputNoisette.checked || inputVannila.checked) {
    fieldsetSupplements.querySelector("span")?.remove();
        return true;
    } else {
        fieldsetSupplements.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Il faut choisir au moins un choix";
        span.style.color = "red";
        fieldsetSupplements.appendChild(span);
        return false;
    }
    
}





function regexStep2() {
    const origin = regexOrigin();
    const intensity = Intensity();
    const température = regexTempérature();
    const tailles = regexTailles();
    const laits = regexLaits();
    const supplements = regexSupplements();
    return origin && intensity && température && tailles && laits && supplements ;
}




