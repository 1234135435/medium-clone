import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { FeedModule } from "../shared/modules/feed/feed.module";
import { UserProfileComponent } from "./components/userProfile/userProfile.component";
import { UserProfileService } from "./services/userProfile.service";
import { GetUserProfilEffect } from "./store/effects/getUserProfile.effect";
import { reduces } from "./store/reducers";

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent
  }

]

@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfilEffect]),
    StoreModule.forFeature('userProfile', reduces),
    FeedModule
  ],
  providers: [
    UserProfileService
  ]
})

export class UserProfileModule {}