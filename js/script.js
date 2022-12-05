const boxElem = document.querySelector(".box");
const cardsContainerElem = document.querySelector(".cards-container");

const team = [
  {
    name: "Wayne Barnett",
    role: "Founder &amp; CEO",
    profilePic: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    profilePic: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    profilePic: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    profilePic: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    profilePic: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    profilePic: "barbara-ramos-graphic-designer.jpg",
  },
];

//Solo testo
for (let i = 0; i < team.length; i++) {
  console.log(team[i]);
  let pElem = document.createElement("p");
  pElem.innerHTML = `${team[i].name} - ${team[i].role} -  ${team[i].profilePic} `;
  boxElem.appendChild(pElem);
}

//Creazione card con immagine

for (let i = 0; i < team.length; i++) {
  //Associo una variabile alle immagini
  let objImg = team[i].profilePic;
  let objName = team[i].name;
  let objRole = team[i].role;

  //Creo la card e il suo tag immagine + aggiunta classi
  let cardItem = document.createElement("div");
  cardItem.classList.add("card");
  cardItem.innerHTML = `<img src="./img/${objImg}" class="photo">`;
  cardItem.innerHTML += `<p><strong>${objName}</strong></p>`;
  cardItem.innerHTML += `<p><em>${objRole}</em></p>`;
  //Collego i nuovi elementi al parent contenitore
  cardsContainerElem.append(cardItem);
}
