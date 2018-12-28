// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

var Maisons = document.getElementById("maison");
var Persos = document.getElementById("persos");

maisons.forEach(function(maison){
    var option = document.createElement("option");
    option.text = maison.nom;
    Maisons.add(option);
});

Maisons.addEventListener("change", function (e) {  
    Persos.textContent = "";
    if (e.target.value == "Stark"){
        getPersonnages("ST").forEach(function (p){
            var perso = document.createElement("li");
            perso.textContent = p;
            Persos.appendChild(perso);
        });
    }
    if (e.target.value == "Lannister"){
        getPersonnages("LA").forEach(function (p){
            var perso = document.createElement("li");
            perso.textContent = p;
            Persos.appendChild(perso);
        });
    }
    if (e.target.value == "Baratheon"){
        getPersonnages("BA").forEach(function (p){
            var perso = document.createElement("li");
            perso.textContent = p;
            Persos.appendChild(perso);
        });
    }
    if (e.target.value == "Targaryen"){
        getPersonnages("TA").forEach(function (p){
            var perso = document.createElement("li");
            perso.textContent = p;
            Persos.appendChild(perso);
        });
    }
});