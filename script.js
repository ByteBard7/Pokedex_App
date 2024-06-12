const pokemonSearch = document.getElementById("pokemonSearch");
const searchBtn = document.getElementById("searchBtn");
const pokemonName = document.getElementById("name");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const pokemonType = document.querySelector(".pokemonType");
const pokemonImg = document.querySelector(".pokemonImg");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defence = document.getElementById("defence");
const spAttack = document.getElementById("spAttack");
const spDefence = document.getElementById("spDefence");
const speed = document.getElementById("speed");

pokemonSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getPokemon();
  }
});

searchBtn.addEventListener("click", getPokemon);

function getPokemon() {
  fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonSearch.value.toLowerCase()}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      pokemonName.innerHTML = `
      ${capitalizeFirstLetter(data.name)} 
      <span> # ${data.id}</span>`;
      weight.textContent = `Weight : ${data.weight}`;
      height.textContent = `Height : ${data.height}`;

      pokemonType.innerHTML = data["types"]
        .map((obj) => `<span>${obj.type.name}</span>`)
        .join("");

      pokemonImg.innerHTML = `
        <img src = "${data.sprites.front_default}">
      `;

      hp.textContent = data.stats[0].base_stat;
      attack.textContent = data.stats[1].base_stat;
      defence.textContent = data.stats[2].base_stat;
      spAttack.textContent = data.stats[3].base_stat;
      spDefence.textContent = data.stats[4].base_stat;
      speed.textContent = data.stats[5].base_stat;
    });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
