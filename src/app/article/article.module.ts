import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ErrorMassagesModule } from "../shared/modules/errorMassages/errorMassages.module";
import { LoadingModule } from "../shared/modules/loading/loading.module";
import { TagsListModule } from "../shared/modules/tagsList/tagsList.module";
import { SharedArticleService } from "../shared/services/article.service";
import { ArticleComponent } from "./components/article.component";
import { ArticleService } from "./services/article.service";
import { GetArticleEffect } from "./store/effects/article.effect";
import { DeletArticleEffect } from "./store/effects/deletArticle.effect";
import { reducers } from "./store/reducers";

const router = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeletArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(router),
    
    ErrorMassagesModule,
    LoadingModule,
    TagsListModule

  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleService, ArticleService]
})
export class AcrticleModule {}