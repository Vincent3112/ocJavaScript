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

// TODO : compléter ce fichier pour ajouter les liens à la page web

listeLiens.forEach( function (lien){
    
    var Titre = document.createElement("a");
    var Url = document.createElement("a");
    var Auteur = document.createElement("a");
    var Fond = document.createElement("p");
    
    Fond.style.backgroundColor = "white";
    //Url.style.margin = "15px";
    Titre.style.color = "#428bca";
    Url.style.color = "#blak";
    Url.style.font = "10px";
    
    
    Titre.textContent = lien.titre + "  ";
    Url.textContent = lien.url;
    Auteur.textContent = "Ajouté par " + lien.auteur;
    Url.href = lien.url;
    
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(Titre);
    ligneTitre.appendChild(Url);
    
    //Titre.appendChild(ligneTitre);
    Fond.appendChild(ligneTitre);
    Fond.appendChild(Auteur);
    
    document.getElementById("contenu").appendChild(Fond);
    });