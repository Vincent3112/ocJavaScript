/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});





var affichageFormBouton  = document.getElementById("ajoutForm");



var messageAjout = document.getElementById("messageAjout");
var messageTitre = document.getElementById("messageAjout");


affichageFormBouton.addEventListener('click', function(){
    affichageFormBouton.style.display = "none";
    formElmt = creerForm();
    document.body.insertBefore(formElmt, contenu);
    
    formElmt.addEventListener('submit', function(event){
        formElt.style.display = "none";
        affichageFormBouton.style.display = "inline-block";
        ajoutNouveauLien();
        formElt.reset();
        event.preventDefault();
    });
})

function creerForm(){
    var formElmt = document.createElement("form");
    formElmt.id = "ajouterLien";
    formElmt.appendChild(inputMaker({"type":"text",
                                "name":"auteur",
                                "placeholder": "Entrez votre nom",
                                "required":"required"}));
    formElmt.appendChild(inputMaker({"type":"text",
                                "name":"titre",
                                "placeholder": "Entrez le titre du lien",
                                "size": "30",
                                "required":"required"}));
    formElmt.appendChild(inputMaker({"type":"text",
                                "name":"url",
                                "placeholder": "Entrez l'URL du lien",
                                "size" : "30",
                                "required":"required"}));
    formElmt.appendChild(inputMaker({"type":"submit",
                                "name":"bouton",
                                "value": "Ajouter"}));
    return formElmt;
}

function inputMaker(attributes){
    var element = document.createElement("input");
    for (var key in attributes){
        element.setAttribute(key, attributes[key])
    }
    return element;
}



