// Sélecteurs

// document.querySelector("h4").style.background = "yellow";
// Javascript peut gérer le html et le css avec par ex cette ligne de code
// Va dans le DOM (document), va me chercher la balise h4 (query selector), ".style" JS sait qu'il va devoir injecter du style ".background" c'est l'effet de style

// il faudrait cloisonner élément dans une variable
// const (variable) = valeur attribuée {Donner des noms de variables + appropriés}

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
//baliseHTML.style.background = "yellow";

// Évènements sur le click + (mais toujours déclarer les variables au dessus)
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
//console.log(btn1, btn2);
const response = document.querySelector("p");

//console.log(questionContainer); toujours faire un console.log pour vérifier que ca pointe au bon endroit

// questionContainer.style.borderRadius = "150px"; JS ne prend pas les tirets il faut écrire en CamelCase donc border-radius = borderRadius

// Ajout d'un évènement : la plus commune et moderne : addEventListener, elle se prépare à gérer un event sur la balise qu'on a pointé
// addEventListener prend 2 paramètres : 1) évènement en question, 2) Ensuite on a une Fonction
questionContainer.addEventListener("click", () => {
  //console.log("Click !"); // console.log pour que l'EventListener fonctionne, on peut ensuite
  // questionContainer.style.background = "red"; // style injecté dans sa balise, devient vite contraignant
  // on va donc injecter une classe avec le style particulier : création classe CSS avec le style et injection dans JS

  questionContainer.classList.toggle("question-clicked"); // toggle = si la classe n'y est pas tu me la rajoutes, si elle y est tu me l'enlèves
});
// fonction fléchée () => signifie dès qu'il y a l'évènement qui se déclenche je veux que tu me fasses le code suivant

// ajout d'un évènement pour le btn1

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//-----------------------------------------------------------------------

//Evènements de souris

// MouseMove

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// Mouse Down

// mouse down quand on garde le clique et mouse up quand on relache le clique
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

// Souris quand elle survole une zone Différent de hover : mouseenter

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

// Mouse hover

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//-----------------------------------------------------

// on va aborder ici le KEYPRESS : quelle touche a été tapée

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key"); // balise span

// création d'un son en JS

const ring = (key) => {
  const audio = new Audio(); // nouvel objet "Audio" avec majuscule
  audio.src = "./" + key + ".mp3";
  console.log(audio.src);
  audio.play();
};
// évènement sur une touche c'est sur document que ca se passe

document.addEventListener("keypress", (e) => {
  key.textContent = e.key; // chaque lettre va être affichée ici

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  if (e.key === "enter") ring(e.key);
});

// -------------------------------------------------

// Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.top = 0 + "px";
  } else {
    nav.style.top = "-50px";
  }
});

//-------------------------------------------------

// Formulaires

// Évènements

const inputName = document.querySelector('input[type="text"]');
// si on a un input de type select
const select = document.querySelector("select");
// on veut supprimer l'actualisation sur le click du formulaire "valider"
const form = document.querySelector("form");

let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

// le (e) récupère toutes les data de l'évènement

// on cherche select
select.addEventListener("input", (e) => {
  language = e.target.value;
});

// form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // on va faire en sorte que si la case n'est pas cochée, alors ce n'est pas validé
  console.log(cgv.checked);

  if (cgv.checked) {
    //affiche contenu des variables
    //alert("Votre commande est validée !");
    // on veut afficher dans la div vide le contenu du formulaire
    // innerHTML injecte des balises
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
`;
  } else {
    alert("ATTENTION : Veuillez accepter les CGV");
  }
});

//----------------------------------------------
// Load Event : Se déclenche une fois que toute la page a été chargée, pratique quand des choses sont lourdes et + longs à lire
// on peut y mettre toute une logique pour que ça se déclenche quand la page est chargée, ou appeler des fonctions au démarrage de la page
window.addEventListener("load", () => {
  //console.log("Document Chargé !");
});

//--------------------------------------------------------------------
// forEach (pour chacun d'eux): quand on a plusieurs élements qui ont la même classe, et qu'on veut toutes les sélectionner
//const boxes = document.getElementsByClassName("box"); peut poser problème
const boxes = document.querySelectorAll(".box");
/*boxes.addEventListener("click", () => {
  console.log("Test");
}); */

console.log(boxes);

// ca nous renvoie à une erreur : is not a function, on ne peut pas ajouter un addEventListener sur nos 3 élements box comme ça
// c'est pour ca qu'il y a ForEach
// mes boxes je vais les appeler "box" (paramètre dans la parenthèse), maintenant on peut donner la logique qu'on veut pour les boxes au paramètre box
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});
