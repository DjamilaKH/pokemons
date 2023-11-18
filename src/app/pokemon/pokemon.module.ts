import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { DetailPokemonsComponent } from './detail-pokemons/detail-pokemons.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [ 
  {path:'edit/pokemon/:id', component: EditPokemonComponent, canActivate:[AuthGuard]},
  {path:'pokemons', component: ListPokemonsComponent},
  {path:'pokemon/add', component:AddPokemonComponent},
  {path:'pokemon/:id', component: DetailPokemonsComponent},



];


@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonsComponent,
    DetailPokemonsComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers:[PokemonService]
})
export class PokemonModule { }
