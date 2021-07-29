import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMassagesModule } from "../errorMassages/errorMassages.module";
import { LoadingModule } from "../loading/loading.module";
import { PopularTagsComponent } from "./components/popularTags.component";
import { PopularTagsService } from "./services/popularTags.service";
import { PopularTagsEffect } from "./store/effects/popularTags.effect";
import { reducer } from "./store/popularTags.reducer";

@NgModule({
  imports:[
    CommonModule,
    StoreModule.forFeature('popularTags', reducer),
    EffectsModule.forFeature([PopularTagsEffect]),
    LoadingModule,
    ErrorMassagesModule,
    RouterModule
  ],
  declarations:[PopularTagsComponent],
  exports:[PopularTagsComponent],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}