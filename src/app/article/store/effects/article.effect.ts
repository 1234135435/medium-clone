import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/internal/operators";
import { SharedArticleService } from "src/app/shared/services/article.service";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/getArticle.action";

@Injectable()

export class GetArticleEffect {

  constructor(
    private actions$: Actions,
    private acticleService: SharedArticleService
  ) {}

  getArticle$ = createEffect(() => this.actions$.pipe(
    ofType(getArticleAction), // т.к. прилетают все экшены мы их фильтруем выбераем нужный
     switchMap(({slug}) => {
      return this.acticleService.getArticle(slug).pipe(
        map((acticle: ArticlesInterface) => {
          return getArticleSuccessAction({article: acticle})
        }),
        catchError(() => {
          return of(getArticleFailureAction())
        })
      )
    })
  ))

}