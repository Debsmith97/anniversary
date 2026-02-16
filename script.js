// Unlock screen
function unlockSite(){
    document.getElementById("lockScreen").style.opacity="0";

    setTimeout(()=>{
        document.getElementById("lockScreen").style.display="none";
        document.getElementById("mainContent").style.display="block";
    },800);
}

// Apple-style scroll reveal
const sections = document.querySelectorAll('.apple');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if(top < window.innerHeight * 0.85){
            sec.classList.add('show');
        }
    });
});

// Sweet message
function showLove(){
    alert("Happy Anniversary ❤️\nYou are my safest place.");
}
// Floating hearts generator
const heartContainer = document.querySelector(".hearts");

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (4 + Math.random()*4) + "s";
    heart.style.fontSize = (16 + Math.random()*20) + "px";

    heartContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(createHeart, 400);
// Touch screen hearts
document.addEventListener("touchstart", createTouchHeart);
document.addEventListener("click", createTouchHeart);

function createTouchHeart(e){

    const heart = document.createElement("div");
    heart.className = "touch-heart";

    // Random cute hearts
    const hearts = ["💗","💖","💞","💕","❤️"];
    heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

    // Get touch or click position
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;

    heart.style.left = x + "px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },1500);
}
// HEART BURST EFFECT
function heartBurst(){

    const hearts = ["💗","💖","💞","💕","❤️"];

    for(let i=0;i<35;i++){

        const heart = document.createElement("div");
        heart.className = "burst-heart";
        heart.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];

        // Start from center of screen
        heart.style.left = window.innerWidth/2 + "px";
        heart.style.top = window.innerHeight/2 + "px";

        // Random explosion direction
        const x = (Math.random()-0.5) * 600 + "px";
        const y = (Math.random()-0.5) * 600 + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },2000);
    }

    // Sweet message after burst
    setTimeout(()=>{
        
    },800);
setTimeout(showLoveCard, 900);

}
// Show love card
function showLoveCard(){
    document.getElementById("loveCard").classList.add("show");
}

// Close love card
function closeCard(){
    document.getElementById("loveCard").classList.remove("show");
}
