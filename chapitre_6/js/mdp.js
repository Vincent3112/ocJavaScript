var form = document.querySelector("form");

var message = document.getElementById("infoMdp");

form.addEventListener("submit", function(e){
   
    var MDP1 = form.elements.mdp1.value;
    var MDP2 = form.elements.mdp2.value;
    var regex = /[0-9]/;
    
    if (MDP1 != MDP2){
        message.textContent = "Erreur : Mots de passe différents !";
        e.preventDefault();
    }
    
    if (MDP1 == MDP2){
        if (MDP1.length >= 6){
            if (regex.test(MDP1)){
                message.textContent = "Mot de passe OK !";
                e.preventDefault();
            }
            else{
                message.textContent = "Erreur : Le mot de passe doit contenir un chiffre !";
                e.preventDefault();
            }
            
        }
        else{
            message.textContent = "Erreur : Mot de passe trop court !";
            e.preventDefault();
        }
       e.preventDefault(); 
    }
    
});