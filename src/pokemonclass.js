var pokemonArray = []

class Pokemon {
  constructor(name, frontImage, backImage){
    this.name = name;
    this.frontImage = frontImage;
    this.backImage = backImage;
    pokemonArray.push(this)
  }

  generateUglyDiv(){
    return `<div class="pokemon-container">
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img id="${this.name}-image" status="front" src="${this.frontImage}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" id="${this.name}-p" data-action="flip-image">flip card</p>
      </div>
    </div>`
  }

  static all () {
    return pokemonArray
  }

  static findPokemon(substring){
    let output = []
    if (substring !== "") {
      for(let pokemon of pokemonArray) {
        if (pokemon.name.includes(substring)) {output.push(pokemon)}
      }
    }
    return output
  }
}
