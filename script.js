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
