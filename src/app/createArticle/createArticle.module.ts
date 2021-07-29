import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ArticleFormModule } from "../shared/modules/createForms/acticleForm.module";
import { CreateArticleComponent } from "./components/createArticle/createArticle.component";
import { CreateActicleService } from "./services/createArticle.service";
import { CreateActicleEffect } from "./store/effects/createArticle.effect";
import { reduser } from "./store/redusers";

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
]

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateActicleEffect]),
    StoreModule.forFeature('createArticle', reduser)
  ],
  declarations: [CreateArticleComponent],
  providers:[CreateActicleService],
  exports:[CreateArticleComponent]
})

export class CreateArticleModule {}

