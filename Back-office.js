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
    step2.style.display = "block";
    step3.style.display = "none";
    step1.style.display = "none";
    precedentBtn.style.display = "block";
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
const main = document.getElementById("main");
// console.log(main);
main.addEventListener("click",changeProgressBar);
function changeProgressBar(event){
    // console.log("click");
    let target = event.target;
    // console.log(target);
    let value = target.textContent;
    // console.log(value);
    if((value === "Suivant") ){
        console.log("bien");
        
    }
}





