/* =========================
   TYPING EFFECT
========================= */

const typingText = document.querySelector(".typing-text");

const words = [
"Professional Reels",
"YouTube Video Editor",
"CapCut Editor",
"DaVinci Resolve Editor",
"Social Media Content Editor"
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect(){

if(!typingText) return;

const currentWord = words[wordIndex];

if(isDeleting){

typingText.textContent =
currentWord.substring(0, letterIndex--);

}else{

typingText.textContent =
currentWord.substring(0, letterIndex++);

}

let speed = 100;

if(!isDeleting && letterIndex === currentWord.length){

speed = 1500;
isDeleting = true;

}

else if(isDeleting && letterIndex === 0){

isDeleting = false;

wordIndex++;

if(wordIndex === words.length){
wordIndex = 0;
}

speed = 300;

}

setTimeout(typeEffect, speed);

}

typeEffect();

/* =========================
   CLOSE ALL PLAYLISTS
========================= */

function closeAllPlaylists(){

const allBoxes =
document.querySelectorAll(
".playlist-box, .mobile-playlist"
);

allBoxes.forEach((box)=>{

box.style.display = "none";

});

}

/* =========================
   CAPCUT
========================= */

function toggleCapcut(){

const box =
document.getElementById("capcutBox");

if(!box) return;

if(box.style.display === "block"){

box.style.display = "none";

}else{

closeAllPlaylists();

box.style.display = "block";

box.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

}

/* =========================
   DAVINCI
========================= */

function toggleDavinci(){

const box =
document.getElementById("davinciBox");

if(!box) return;

if(box.style.display === "block"){

box.style.display = "none";

}else{

closeAllPlaylists();

box.style.display = "block";

box.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

}

/* =========================
   IAS
========================= */

function toggleIAS(){

const box =
window.innerWidth <= 768
? document.getElementById("mobileIasBox")
: document.getElementById("iasBox");

if(!box) return;

if(box.style.display === "block"){

box.style.display = "none";

}else{

closeAllPlaylists();

box.style.display = "block";

box.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

}

/* =========================
   MAA
========================= */

function toggleMaa(){

const box =
window.innerWidth <= 768
? document.getElementById("mobileMaaBox")
: document.getElementById("maaBox");

if(!box) return;

if(box.style.display === "block"){

box.style.display = "none";

}else{

closeAllPlaylists();

box.style.display = "block";

box.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

}

/* =========================
   CRYPTO
========================= */

function toggleCrypto(){

const box =
window.innerWidth <= 768
? document.getElementById("mobileCryptoBox")
: document.getElementById("cryptoBox");

if(!box) return;

if(box.style.display === "block"){

box.style.display = "none";

}else{

closeAllPlaylists();

box.style.display = "block";

box.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

}

/* =========================
   FREELANCE
========================= */

function toggleFreelance(){

const box =
window.innerWidth <= 768
? document.getElementById("mobileFreelanceBox")
: document.getElementById("freelanceBox");

if(!box) return;

if(box.style.display === "block"){

box.style.display = "none";

}else{

closeAllPlaylists();

box.style.display = "block";

box.scrollIntoView({
behavior:"smooth",
block:"start"
});

}

}

function toggleIASThumbs(){

const box =
document.getElementById("iasThumbs");

box.style.display =
box.style.display === "grid"
? "none"
: "grid";

}

function toggleMaaThumbs(){

const box =
document.getElementById("maaThumbs");

box.style.display =
box.style.display === "grid"
? "none"
: "grid";

}

function toggleCryptoThumbs(){

const box =
document.getElementById("cryptoThumbs");

box.style.display =
box.style.display === "grid"
? "none"
: "grid";

}

/* =========================
   SCROLL ANIMATION
========================= */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.2
});

const hiddenElements =
document.querySelectorAll(
'.skill-card,.project-card,.service-card,.thumb-card,.video-card,.playlist-box'
);

hiddenElements.forEach((el)=>{
observer.observe(el);
});

/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", ()=>{

closeAllPlaylists();

});

/* =========================
   AUTO HORIZONTAL SCROLL
========================= */

const sliders =
document.querySelectorAll(".video-slider");

sliders.forEach((slider)=>{

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown",(e)=>{

isDown = true;

startX =
e.pageX - slider.offsetLeft;

scrollLeft =
slider.scrollLeft;

});

slider.addEventListener("mouseleave",()=>{

isDown = false;

});

slider.addEventListener("mouseup",()=>{

isDown = false;

});

slider.addEventListener("mousemove",(e)=>{

if(!isDown) return;

e.preventDefault();

const x =
e.pageX - slider.offsetLeft;

const walk =
(x - startX) * 2;

slider.scrollLeft =
scrollLeft - walk;

});

});

function toggleCertificate(id){

const cert =
document.getElementById(id);

cert.classList.toggle("active");

}
