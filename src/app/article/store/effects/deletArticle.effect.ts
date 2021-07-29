import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/internal/operators";
import { ArticleService } from "../../services/article.service";
import { deletArticleAction, deletArticleFailureAction, deletArticleSuccessAction } from "../actions/deletArticle.action";

@Injectable()

export class DeletArticleEffect {

  constructor(private actions$: Actions, private acticleService: ArticleService, private router: Router) {}

  deletArticle$ = createEffect(() => this.actions$.pipe(
    ofType(deletArticleAction), // т.к. прилетают все экшены мы их фильтруем выбераем нужный
     switchMap(({slug}) => {
      return this.acticleService.articleDelet(slug).pipe(
        map(() => {
          return deletArticleSuccessAction()
        }),
        catchError(() => {
          return of(deletArticleFailureAction())
        })
      )
    })
  ))

  
  redirectAfterDelet$ = createEffect(() => this.actions$.pipe(
    ofType(deletArticleSuccessAction),
    tap(() => {
      this.router.navigate(['/'])
    })
  ),{dispatch: false})

}