// Smooth scrolling

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();


document.querySelector(
this.getAttribute("href")
)
.scrollIntoView({

behavior:"smooth"

});


});

});



// Animation saat scroll

const sections=document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let posisi=section.getBoundingClientRect().top;


if(posisi < window.innerHeight - 100){

section.style.opacity="1";

section.style.transform="translateY(0)";

}


});


});



sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="0.8s";

});