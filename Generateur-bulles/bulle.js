const bubble = document.createElement("span");
//si on veut injecter ce span qq part
bubble.classList.add("bubble");
document.body.appendChild(bubble); // body tu as un enfant appelé bubble et js ajoute le span dans le body html

// console.log(Math.random()) fournit un chiffre entre 0 et 1 et * 100 donnera entre 0 et 100

const size = Math.random() * 200 + 100 + "px";

// injecter le style :
bubble.style.height = size;
bubble.style.width = size;

console.log(size);
