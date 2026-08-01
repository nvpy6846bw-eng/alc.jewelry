/*====================================
ALC JEWELRY
SCRIPT.JS
====================================*/

/*=========================
PAGE LOAD
=========================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*=========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================
SCROLL REVEAL
=========================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});

/*=========================
NAVBAR EFFECT
=========================*/

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(0,0,0,.92)";

nav.style.padding="14px 8%";

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.5)";

}else{

nav.style.background="rgba(0,0,0,.55)";

nav.style.padding="18px 8%";

nav.style.boxShadow="none";

}

});

/*=========================
INVENTORY HOVER
=========================*/

document.querySelectorAll(".inventoryItem").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateY(-10px) scale(1.02)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateY(0) scale(1)";

});

});

/*=========================
SERVICE CARD EFFECT
=========================*/

document.querySelectorAll(".serviceCard").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

/*=========================
BUTTON PULSE
=========================*/

setInterval(()=>{

document.querySelectorAll(".instagram,.navButton,.primary").forEach(btn=>{

btn.classList.add("pulse");

setTimeout(()=>{

btn.classList.remove("pulse");

},1200);

});

},4500);

/*=========================
TYPEWRITER HERO
=========================*/

const title=document.querySelector(".hero h1");

const text=title.innerHTML;

title.innerHTML="";

let i=0;

function typeHero(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typeHero,35);

}

}

typeHero();

/*=========================
PARALLAX HERO
=========================*/

window.addEventListener("mousemove",(e)=>{

const hero=document.querySelector(".hero");

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

hero.style.backgroundPosition=`${50+x}% ${50+y}%`;

});

/*=========================
SCROLL PROGRESS BAR
=========================*/

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.width="0%";

progress.style.background="#D4AF37";

progress.style.boxShadow="0 0 15px #D4AF37";

progress.style.zIndex="999999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

progress.style.width=(winScroll/height)*100+"%";

});

/*=========================
RANDOM GOLD SHIMMER
=========================*/

setInterval(()=>{

const items=document.querySelectorAll(".inventoryItem");

const random=Math.floor(Math.random()*items.length);

items[random].style.boxShadow="0 0 35px rgba(212,175,55,.8)";

setTimeout(()=>{

items[random].style.boxShadow="";

},1200);

},2500);

/*=========================
CONSOLE MESSAGE
=========================*/

console.clear();

console.log(

"%cALC JEWELRY",

"color:#D4AF37;font-size:24px;font-weight:bold;"

);

console.log(

"%cLuxury Gold Buying • Selling • Trading",

"color:white;font-size:14px;"

);
