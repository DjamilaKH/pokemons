import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styles: [
  ]
})
export class ListPokemonsComponent implements OnInit{
  pokemonsList:Pokemon[];
  constructor(private router:Router,private pokemonService: PokemonService){}
 goToPokemon(pokemon: Pokemon){
  this.router.navigate(['/pokemon', pokemon.id])
 }
 ngOnInit(){
this.pokemonService.getPokemonList().subscribe(pokemonsList =>this.pokemonsList=pokemonsList);

 }
 

}
