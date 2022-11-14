import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ pokemonList[0] }}!</h1>`
})
export class AppComponent {
  pokemonList = ['Bulbizarre', 'Salameche', 'Carapuce'];

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon('Salameche');
  } 

  selectPokemon(pokemonName: string){
    console.log(`Vous avez cliqué sur le pokémon ${pokemonName}`);
  }
}
