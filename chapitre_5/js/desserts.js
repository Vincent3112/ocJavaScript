document.querySelector("button").addEventListener("click", function (){
   var nouveauDessert = prompt("Veuillez saisir un dessert"); 


var elmtDessert = document.createElement("li");

elmtDessert.textContent = nouveauDessert;

elmtDessert.addEventListener("click", function(){
    var nouveauNom = prompt("Veuillez modifier le nom du dessert");
    elmtDessert.textContent = nouveauNom;
})
    
document.getElementById("desserts").appendChild(elmtDessert);
    
    
});