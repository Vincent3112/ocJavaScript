var letters = document.getElementById("letters");
var words = document.getElementById("words");

var alphabet = ["A", "B", "C", "D", "E"];
var c = document.createElement('a');

alphabet.forEach( function(letter) {
    var a = document.createElement('a');
    var b = document.createElement('a');
    
    a.textContent = letter;
    a.href = "";
    b.textContent = " | ";
    c.textContent = "...";
    
    a.addEventListener("click", function(e){
        
        if (letter == "D" || letter == "E"){
            words.innerHTML="Aucun mot trouvé !";
        }
        else{
           words.innerHTML="";
            ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + letter, function (reponse) {
                var terms = JSON.parse(reponse);

                terms.forEach(function(word){
                    var titre = document.createElement("h2");
                    titre.textContent = word.term;
                    var sentence = document.createElement("a");
                    sentence.textContent = word.definition;
                    words.appendChild(titre);
                    words.appendChild(sentence);
                });
            }); 
        } 
});
    letters.appendChild(a);
    letters.appendChild(b);
});
letters.appendChild(c);