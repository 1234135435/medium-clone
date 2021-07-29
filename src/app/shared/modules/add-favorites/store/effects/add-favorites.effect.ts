import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { AddToFavoritesService } from "../../services/AddToFavorites.service";
import { AddToFavoritesAction, AddToFavoritesFailureAction, AddToFavoritesSuccessAction } from "../actions/action";

@Injectable()
export class AddFavoritesEffect {
  constructor(private actions$: Actions, private addToFavoritesService: AddToFavoritesService) {}

  addToFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(AddToFavoritesAction),
    switchMap(({isFavorited, slug, type}) => {
      const article$ = isFavorited
      ? this.addToFavoritesService.removeAddToFavorites(slug)
      : this.addToFavoritesService.addToFavorites(slug)
      return article$.pipe(
        map((article: ArticlesInterface) => {
          return AddToFavoritesSuccessAction({article}) // todo почему ругаеться на of?
        }),
        catchError(() => {
          return of(AddToFavoritesFailureAction())
        })
      )
    })
  ))

}