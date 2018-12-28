var ballon = document.getElementById("ballon");
var demarrer = document.getElementById("demarrer");
var arreter = document.getElementById("arreter");
var vitesse = 15;
var animation = null;
var w = window.innerWidth;
var cadre = document.getElementById("cadre");
var direction = 1;
var largeurCadre = parseFloat(getComputedStyle(cadre).width);
var largeurBallon = parseFloat(getComputedStyle(ballon).width);

function deplacerBallon(){
    demarrer.disabled = true;
    arreter.disabled = false;
    var xBallon = parseFloat(getComputedStyle(ballon).left);
    if((xBallon + largeurBallon) > largeurCadre - 10 || (xBallon < 0)){
        direction *= - 1;
    }
    ballon.style.left = (xBallon + (direction * vitesse)) + "px";
    animation = requestAnimationFrame(deplacerBallon);
}

function arreterBallon(){
    demarrer.disabled = false;
    arreter.disabled = true;
    cancelAnimationFrame(animation);
}

demarrer.addEventListener("click",deplacerBallon);
arreter.addEventListener("click",arreterBallon);


