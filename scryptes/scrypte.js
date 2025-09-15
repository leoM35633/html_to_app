console.log("Hello world from script.js");

let title = document.querySelector('h1');

title.innerText += " from js";

title.style.color = "darkviolet";

title.after("Welcome the DOM");

//Affichage de l'heure et mise à jour toutes les 1000 millisecondes
setInterval(() => {
    document.querySelector("h3").innerText = new Date().toLocaleTimeString();
}, 1000);

//Suppresion du premier item
let ul = document.querySelector('ul');
let firstli = document.querySelector('li');
ul.removeChild(firstli);

// Ajout du dernier items
let lastLi = document.createElement('li');
lastLi.innerText = 'Item 3';
ul.append(lastLi);

// Ajout des boutons
let image = document.querySelector('img');
let paragrapheImg = document.getElementById("paragraphe-img");

let buttonShakeImg = document.createElement('button');
buttonShakeImg.id = "button-shake-img";
buttonShakeImg.innerText = "Shake / Unshake image";
paragrapheImg.appendChild(buttonShakeImg);

//Déclenchement du shake / unshake de l'image
buttonShakeImg.addEventListener('click', function() {
    image.classList.toggle("shake");
});


