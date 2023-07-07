let text =document.getElementById("text");
let textIntro =document.getElementById("textIntro");
let textIntroText =document.getElementById("textIntroText")

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    text.style.top = 20+value*-0.05 + "%";
    textIntro.style.top = 50+value*-0.075 + "%";
    textIntroText.style.top = 80+value*-0.1 + "%";
})