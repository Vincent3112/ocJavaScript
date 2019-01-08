ajaxGet("http://localhost/javascript-web-srv/data/tableaux.json", function (reponse) {
        
    var tableaux = document.getElementById("tableaux");
    var newTable = JSON.parse(reponse);
    
    newTable.forEach(function (tableau){
        var ligne = document.createElement("tr");
        var nom = document.createElement("td");
        var annee = document.createElement("td");
        var auteur = document.createElement("td");
        
        nom.textContent = tableau.Nom;
        annee.textContent = tableau.Annee;
        auteur.textContent = tableau.Auteur;
        
        ligne.appendChild(nom);
        ligne.appendChild(annee);
        ligne.appendChild(auteur);
        
        tableaux.appendChild(ligne);
    });
});