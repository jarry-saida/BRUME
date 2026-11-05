const InfoProduit = {
    nom : null ,
    prix : null,
    image : null,
    grains : null,
    température : null,
    tailles : null,
    optionsLait : null,
    suppléments : null
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
suivantBtn.addEventListener("click",ValidationStep1);

precedentBtn.addEventListener("click",ValidationStep2_3);
function affichageStep1(){
    if(regexStep1()){
        step2.style.display = "block";
        step3.style.display = "none";
        step1.style.display = "none";
        precedentBtn.style.display = "block";
    }
}

function affichageStep2(){
    step2.style.display = "block";
    step1.style.display = "none";
    step3.style.display = "none";
    precedentBtn.style.display = "block";
    suivantBtn.style.display = "block";
    submitBtn.style.display = "none";
}
function affichageStep3(){
    step2.style.display = "none";
    step1.style.display = "none";
    step3.style.display = "block";
    precedentBtn.style.display = "block";
    suivantBtn.style.display = "none";
    submitBtn.style.display = "block";
}
function ValidationStep1(){
    if (step2.style.display === "none") {
        affichageStep1();
    }else{
        affichageStep3();
    }
}
function ValidationStep2_3(){
    if ((step3.style.display === "block")) {
        affichageStep2();
    }else if ((step2.style.display === "block") && (step3.style.display === "none")){
        step2.style.display = "none";
        step1.style.display = "block";
        precedentBtn.style.display = "none";
    }
}
const checkboxPromotion = document.getElementById("isPromotion");
checkboxPromotion.addEventListener("change",InfoPromotion);
const promotionInfo = document.getElementById("promotion");
// console.log(promotionInfo);
function InfoPromotion(){
    if(checkboxPromotion.checked){
        promotionInfo.hidden = false;
    }else{
        promotionInfo.hidden = true ;
    }
}
const inputName = document.getElementById("productName");
// console.log(inputName);
// inputName.addEventListener("input",regexNom);
const divNom = document.getElementById("divNom");
// inputName.addEventListener("input",regexNom);
function regexNom(){
    const regexNom = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/ ;
    const valueNom = inputName.value;// wselt hna 3la 9bel la valeur
    // console.log(valueNom);
        const divNom = document.getElementById("divNom");
    
    if(regexNom.test(valueNom)){
        // console.log("nom valide");
// console.log(InfoProduit);
        InfoProduit.nom = valueNom;
// console.log(InfoProduit);
divNom.querySelector("span")?.remove();
return true;
    }else{
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
function regexPrix(){
    const regexPrix = /^(?=.*[1-9])\d+(\.\d{1,2})?$/;
    const valuePrix = inputPrix.value;
    // console.log(valuePrix);
        const divPrix = document.getElementById("divPrix");

    if(regexPrix.test(valuePrix)){
// console.log(InfoProduit);
        InfoProduit.prix = valuePrix;
// console.log(InfoProduit);
divPrix.querySelector("span")?.remove();

return true;
    }else{
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
function regexImage(){
    const regexImage = /^https?:\/\/.+\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i;
    const valueImage = inputImage.value;
    // console.log(valueImage);
        const divImage = document.getElementById("divImage");
    
    if(regexImage.test(valueImage)){
divImage.querySelector("span")?.remove();

        InfoProduit.image = valueImage;
        return true;
    }else{
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
function regexPourcentage(){
        const regexPourcentage = /^(100|[1-9]\d?)$/;
            const divPourcentage = document.getElementById("div%");
divPourcentage.querySelector("span")?.remove();

        const valuePourcentage = inputPourcentage.value;
        // console.log(valuePourcentage);
                if (regexPourcentage.test(valuePourcentage)) {
divPourcentage.querySelector("span")?.remove();
return true;
        }else{
            divPourcentage.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Vous avez entrer un pourcentage invalide";
        span.style.color = "red";
        divPourcentage.appendChild(span);
        return false;
        }
}
function regexDate(){


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
         }else{
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
        console.log("checked");
        

        if (regexDate() & regexPourcentage()) {
            return true;
        } else {
            return false;
        }

    } else {
        console.log(" non checked");

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
// function regexStep1(){
//     // console.log(inputName.value);
    


// }




