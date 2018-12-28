var boutton = document.getElementById("boutton");
var compteur = document.getElementById("compteur");
var compter = 0;
var intervalId = null;
var demarre = false;

var passerLeTemps = function(){
    compter++;
    compteur.textContent = Number(compteur.textContent) + 1;;
};

boutton.addEventListener("click", function(){
    
    if(!demarre){
        intervalId = setInterval(passerLeTemps, 1000);
        boutton.textContent = "Arrêter";
        
    }
    
    else {
        clearInterval(intervalId);
        boutton.textContent = "Démarrer";
        
    }
    demarre = !demarre;
    
    
    
});


