var compteur = 0;

var Compteur = document.getElementById("compteurClics");

var fct = function() {
    compteur++;
    Compteur.textContent = compteur;
};

document.getElementById("clic").addEventListener("click", fct);

document.getElementById("desactiver").addEventListener("click", fct2);

var fct2 = function(){
    document.getElementById("clic").removeEventListener("click", fct);
};
