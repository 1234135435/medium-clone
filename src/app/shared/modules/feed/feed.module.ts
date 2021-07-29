import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AddFavoritesModule } from "../add-favorites/add-favorites.module";
import { ErrorMassagesModule } from "../errorMassages/errorMassages.module";
import { LoadingModule } from "../loading/loading.module";
import { PaginationModule } from "../pagination/pagination.module";
import { TagsListModule } from "../tagsList/tagsList.module";
import { FeedComponent } from "./components/feed.component";
import { GetFeedEffect } from "./store/effects/getFeed.effect";
import { reducers } from "./store/reducers";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMassagesModule,
    LoadingModule,
    PaginationModule,
    TagsListModule,
    AddFavoritesModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent]
})
export class FeedModule {}