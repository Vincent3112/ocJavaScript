// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var pays = document.getElementById("pays");
var suggestions = document.getElementById("suggestions");

pays.addEventListener("input", function(e){
    var mot = e.target.value;
    suggestions.textContent="";
    listePays.forEach(function(PAYS){
    if(PAYS.includes(mot)){
        var div = document.createElement("a");
        var br = document.createElement("br");
        div.textContent=PAYS;
        suggestions.appendChild(div);
        suggestions.appendChild(br);
    }   
});
});




