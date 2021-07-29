import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/internal/operators";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { CreateActicleService } from "../../services/createArticle.service";
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from "../actions/createAction";

@Injectable()
export class CreateActicleEffect {
  constructor(
    private actions$: Actions,
    private createActicleService: CreateActicleService,
    private router: Router
  ) {}
  
  createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleAction), 
    switchMap(({articleInput}) => {
      return this.createActicleService.createArticle(articleInput).pipe(
        map((article: ArticlesInterface) => {
          return createArticleSuccessAction({article: article})
        }),
        catchError((errorRespons: HttpErrorResponse) => {
          return of(createArticleFailureAction({errors: errorRespons.error.errors}));
          })
        )
      })
    )
  )


  redirectArticleSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleSuccessAction),
    tap(({article}) => {
      this.router.navigate(['/articles', article.slug])
    })
  ), {dispatch: false})
}