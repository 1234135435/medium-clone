import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { AddToFavoritesComponent } from "./components/add-favorites.component";
import { AddToFavoritesService } from "./services/AddToFavorites.service";
import { AddFavoritesEffect } from "./store/effects/add-favorites.effect";

@NgModule({
  declarations: [
    AddToFavoritesComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddFavoritesEffect])
  ],
  exports: [
    AddToFavoritesComponent
  ],
  providers: [
    AddToFavoritesService
  ]
})

export class AddFavoritesModule {}