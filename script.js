var squadraAttuale = 1;

var immaginiPersone = {
  "Mateo": "IMMAGINI/mateo.jpg",
  "Davide": "IMMAGINI/davide.jpg",
  "Luca": "IMMAGINI/luca.jpg",
  "Saymon": "IMMAGINI/antonio.jpg",
  "Antonio": "IMMAGINI/antonio.jpg",
  "Dario": "IMMAGINI/Dario.jpg",
  "Ture": "IMMAGINI/Ture.jpg",
  "Mario": "IMMAGINI/antonio.jpg",
  "Verduci": "IMMAGINI/Verudci.jpg",
  "Pietro": "IMMAGINI/Pietro.jpg",
  "Samuele": "IMMAGINI/Samuele.jpg",
  "Gabriele": "IMMAGINI/Gabriele.jpg",
  "Paladino": "IMMAGINI/Paladino.jpg",
};

function aggiungiElemento() {
  var input = document.getElementById("inputText");
  var valore = input.value.trim();
  if (valore !== "") {
    var lista;

    if (squadraAttuale === 1) {
      lista = document.getElementById("lista1");
    } else {
      lista = document.getElementById("lista2");
    }

    var messaggio = document.getElementById("messaggio");

    if (lista.getElementsByTagName("li").length >= 5) {
      messaggio.style.display = "block";
    } else {
      if (messaggio.style.display === "block") {
        messaggio.style.display = "none";
      }

      var nuovoElemento = document.createElement("li");
      var nomeElemento = document.createTextNode(valore);
      nuovoElemento.appendChild(nomeElemento);

      if (immaginiPersone.hasOwnProperty(valore)) {
        var immaginePersona = document.createElement("img");
        immaginePersona.src = immaginiPersone[valore];
        immaginePersona.alt = valore;
        immaginePersona.classList.add("immagine-persona");
        nuovoElemento.appendChild(immaginePersona);
      }

      lista.appendChild(nuovoElemento);
      input.value = "";
    }
  }
}

function cambiaSquadra() {
  squadraAttuale = (squadraAttuale === 1) ? 2 : 1;
  var indiceSquadra = document.getElementById("indiceSquadra");
  indiceSquadra.textContent = "Squadra selezionata: " + squadraAttuale;
}

var apriFinestraBtn = document.getElementById("apriFinestraBtn");
var finestraModale = document.getElementById("finestraModale");
var chiudiFinestraBtn = document.getElementById("chiudiFinestraBtn");

apriFinestraBtn.addEventListener("click", function() {
  finestraModale.style.display = "block";
});

chiudiFinestraBtn.addEventListener("click", function() {
  finestraModale.style.display = "none";
});
var salvaBtn = document.getElementById("salvaBtn");
salvaBtn.addEventListener("click", function() {
  var nomeInput = document.getElementById("nomeInput");
  var fotoInput = document.getElementById("fotoInput");
  
  var nome = nomeInput.value.trim();
  var foto = fotoInput.files[0]; // Assume che sia stato selezionato solo un file
  
  if (nome !== "" && foto) {
    // Aggiungi il codice per gestire il nome e l'immagine qui
    aggiungiGiocatore(nome, foto);
    
    // Chiudi la finestra modale
    finestraModale.style.display = "none";
  }
});

function aggiungiGiocatore(nome, foto) {
  var lista;
  
  if (squadraAttuale === 1) {
    lista = document.getElementById("lista1");
  } else {
    lista = document.getElementById("lista2");
  }
  
  var nuovoElemento = document.createElement("li");
  nuovoElemento.textContent = nome;
  
  var urlImmagine = URL.createObjectURL(foto);
  var immaginePersona = document.createElement("img");
  immaginePersona.src = urlImmagine;
  immaginePersona.alt = nome;
  immaginePersona.classList.add("immagine-persona");
  
  nuovoElemento.appendChild(immaginePersona);
  
  lista.appendChild(nuovoElemento);
}

  
  


