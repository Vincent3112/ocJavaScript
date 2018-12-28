var compteur = 0;

var fct = function(){
    compteur++;
    document.getElementById("compteurClics").textContent = compteur;
};
    
var elmtBoutton = document.getElementById("clic");

elmtBoutton.addEventListener("click", fct );


