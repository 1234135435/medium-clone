import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/internal/operators";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { EditActicleService } from "../../services/editArticle.service";
import { editArticleAction, editArticleFailureAction, editArticleSuccessAction } from "../actions/editAction";

@Injectable()
export class EditActicleEffect {
  constructor(
    private actions$: Actions,
    private editActicleService: EditActicleService,
    private router: Router
  ) {}
  
  updateArticle$ = createEffect(() => this.actions$.pipe(
    ofType(editArticleAction), 
    switchMap(({slug, articleInput}) => {
      return this.editActicleService.updateArticle(slug, articleInput).pipe(
        map((article: ArticlesInterface) => {
          return editArticleSuccessAction({article: article})
        }),
        catchError((errorRespons: HttpErrorResponse) => {
          return of(editArticleFailureAction({errors: errorRespons.error.errors}));
          })
        )
      })
    )
  )


  redirectArticleUpdate$ = createEffect(() => this.actions$.pipe(
    ofType(editArticleSuccessAction),
    tap(({article}) => {
      this.router.navigate(['/articles', article.slug])
    })
  ), {dispatch: false})
  
}