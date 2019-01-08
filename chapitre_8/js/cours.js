ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    //console.log(reponse);
    
    var langages = reponse.split(";");
    var liste = document.getElementById("langages");
    
    langages.forEach(function (langage){
        
        var ajoutLangage = document.createElement("li");
        ajoutLangage.textContent = langage;
        liste.appendChild(ajoutLangage);
    });
});

