// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var numeroQuestion = 1;

questions.forEach( function (question) {
    
    var Question = document.createElement("a");
    Question.textContent = "Question " + numeroQuestion + " : ";
    Question.style.fontStyle = "bold";
    
    var Enonce = document.createElement("a");
    Enonce.textContent = question.enonce;
    Enonce.style.fontStyle = "italic";
    Enonce.style.fontWeight = "normal";
    
    var ligneEnonce = document.createElement("h4");
    ligneEnonce.style.margin = "0px";
    ligneEnonce.appendChild(Question);
    ligneEnonce.appendChild(Enonce);
    
    var Boutton = document.createElement("button");
    Boutton.textContent = "Afficher la réponse";
    
    var Reponse = document.createElement("a");
    Reponse.textContent = "";
    
    document.getElementById("contenu").appendChild(ligneEnonce);
    document.getElementById("contenu").appendChild(Boutton);
    document.getElementById("contenu").appendChild(Reponse);
    document.getElementById("contenu").appendChild(document.createElement("br"));
    document.getElementById("contenu").appendChild(document.createElement("br"));
    numeroQuestion++;
    
    Boutton.addEventListener("click", function(){
       document.getElementById("contenu").removeChild(Boutton);
       Reponse.textContent = question.reponse;
        
    });
});




