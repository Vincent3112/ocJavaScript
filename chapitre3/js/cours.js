/*------- COURS -----------*/

/*document.getElementById("langages").innerHTML += '<li id="c">C</li>';
//document.getElementById("langages").innerHTML += '<li id="html">HTML</li>';

document.querySelector("h1").textContent += " douze";


var pythonElmt = document.createElement("li");

pythonElmt.id = "python";
pythonElmt.textContent = "Python";

document.getElementById("langages").appendChild(pythonElmt);

document.getElementById("langages").removeChild(document.getElementById("java"));*/






/*----------JOURNAUX------------*/
/*

// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

for (var i = 0; i < journaux.length; i++){
    var Elmt = document.createElement("a");
    Elmt.textContent = journaux[i];
    Elmt.href = journaux[i];
    
    document.getElementById("contenu").appendChild(Elmt);
    
    document.getElementById("contenu").appendChild(document.createElement("br"));
}
*/





/*----------DICO------------*/

// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
var Elmt = document.createElement("dl");

mots.forEach(function (mot){
    
    var Elmt1 = document.createElement("dt");
    var Elmt2 = document.createElement("dd");
    var Elmt3 = document.createElement("strong");
    
    Elmt3.textContent = mot.terme;
    Elmt2.textContent = mot.definition;
    
    Elmt1.appendChild(Elmt3);
    
    document.getElementById("contenu").appendChild(Elmt1);
    document.getElementById("contenu").appendChild(Elmt2);
});
















