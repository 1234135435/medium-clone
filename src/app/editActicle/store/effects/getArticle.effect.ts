import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/internal/operators";
import { SharedArticleService } from "src/app/shared/services/article.service";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/getArticle.action";

@Injectable()
export class GetActicleEffect {
  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
  ) {}
  
  getUpdataArticle$ = createEffect(() => this.actions$.pipe(
    ofType(getArticleAction), 
    switchMap(({slug}) => {
      return this.sharedArticleService.getArticle(slug).pipe(
        map((article: ArticlesInterface) => {
          return getArticleSuccessAction({article: article})
        }),
        catchError(() => {
          return of(getArticleFailureAction());
          })
        )
      })
    )
  )

}