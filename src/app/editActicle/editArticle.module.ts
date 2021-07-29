import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ArticleFormModule } from "../shared/modules/createForms/acticleForm.module";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { SharedArticleService } from "../shared/services/article.service";
import { EditArticleComponent } from "./components/editArticle/editArticle.component";
import { EditActicleService } from "./services/editArticle.service";
import { EditActicleEffect } from "./store/effects/editArticle.effect";
import { GetActicleEffect } from "./store/effects/getArticle.effect";
import { reduser } from "./store/redusers";

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
]

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([GetActicleEffect, EditActicleEffect]),
    StoreModule.forFeature('editArticle', reduser),
    LoadingModule
  ],
  declarations: [EditArticleComponent],
  providers:[EditActicleService, SharedArticleService],
  exports:[EditArticleComponent]
})

export class EditArticleModule {}

