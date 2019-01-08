var name = document.getElementById("input");



document.getElementById("boutton").addEventListener("click", function(e){
    
    e.preventDefault();
    
    var nameUser = name.value;
    
    ajaxGet("https://api.github.com/users/" + nameUser, function (reponse) {
        
        var profil = document.getElementById("profil");
        var infos = JSON.parse(reponse);
    
        var nom = document.createElement("h2");
        nom.textContent = infos.name;
        
        var photo = document.createElement("img");
        photo.src = infos.avatar_url;
        
        profil.appendChild(photo);
        profil.appendChild(nom);
        
        
    });
});

