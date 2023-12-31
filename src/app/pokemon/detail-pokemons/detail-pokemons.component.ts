import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-detail-pokemons',
  templateUrl: './detail-pokemons.component.html',
  
})
export class DetailPokemonsComponent implements OnInit{

  pokemonList: Pokemon[]
  pokemon: Pokemon| undefined;

constructor(private route:ActivatedRoute, 
  private router: Router, private pokemonService: PokemonService){}
ngOnInit(){
   const  pokemonId : string |null  = this.route.snapshot.paramMap.get('id')
   
if(pokemonId){
 this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon =>this.pokemon=pokemon);

}
}
goToPokemonList(){
this.router.navigate(['/pokemons'])
}
deletePokemon(pokemon:Pokemon){
  this.pokemonService.delatePokemonById(pokemon.id)
  .subscribe(()=> this.goToPokemonList());
}

goToEditPokemon(pokemon:Pokemon){

  this.router.navigate(['/edit/pokemon', pokemon.id])
}
}
