document.addEventListener("DOMContentLoaded", function() {

  for (let pokemon of POKEMONS){
    let name = pokemon.name
    let frontImage = pokemon.sprites.front
    let backImage = pokemon.sprites.back
    new Pokemon (name, frontImage, backImage)
  }

  let searchField = document.getElementById("pokemon-search-input")
  searchField.addEventListener("keyup", showPokemon)
//65-90, 189

  function showPokemon(e) {
    console.log(e.which)
    let relevantPokemon
    if ((e.which>=65 && e.which<=90) || e.which===189){
      relevantPokemon = Pokemon.findPokemon(searchField.value)
    } else if (e.which === 8) {
      relevantPokemon = Pokemon.findPokemon(searchField.value)
    }
    //console.log(relevantPokemon)
    let pokeDiv = document.getElementById('pokemon-container-child')
    pokeDiv.innerHTML = ""
    relevantPokemon.forEach(function(pokemon){
      pokeDiv.innerHTML += pokemon.generateUglyDiv()
    })

    pokeDiv.addEventListener("click", flipCard)

  }

  function flipCard(e){
    let tag = e.target
    if (tag.tagName === "P") {
      let pokemonName = tag.id.slice(0,-2)
      let pokemon = Pokemon.findPokemon(pokemonName)[0]
      let img = document.getElementById(`${pokemonName}-image`)
      if(img.status === "back"){
        img.src = pokemon.frontImage
        img.status = "front"
      } else {
        img.src = pokemon.backImage
        img.status = "back"
      }
    }
  }
})
