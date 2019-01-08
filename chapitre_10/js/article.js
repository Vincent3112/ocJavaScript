var form = document.querySelector("form");
// Gestion de la soumission du formulaire

var confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("https://oc-jswebsrv.herokuapp.com/article", data, function () {
        confirmation.innerHTML="";
        var newLine = document.createElement("a");
        newLine.textContent = "L'article a été ajouté";
        confirmation.appendChild(newLine);
    }, false);
});