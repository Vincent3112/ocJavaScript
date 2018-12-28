var elmtBoutton = document.getElementById("bouton");

var compteur = 0;

var Compteur = document.createElement("a");

Compteur.textContent = "Vous avez cliqué sur le compteur " + compteur + " fois.";


document.getElementById("compteur").appendChild(Compteur);

var fct = function(){
    console.log("cliiiick !");
    compteur++;
    elmtBoutton.removeEventListener("cliiiick !", fct);
};
    
elmtBoutton.addEventListener("click", fct );


document.addEventListener("keypress", function(e) {
    console.log("Touche appuyée " + e.charCode);
});


function infoClavier(e){
    console.log("Event : " + e.type + " info clavier " + e.keyCode)
}

document.addEventListener("keydown", infoClavier);
document.addEventListener("keyup", infoClavier);