import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/internal/operators";
import { AuthService } from "src/app/auth/services/auth.service";
import { PresistaneService } from "src/app/shared/services/presistane.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../action/getCurrentUser.action";

@Injectable()

export class GetCurrentUserEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private presistaneService: PresistaneService,
  ) {}
  
  GetCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction), // т.к. прилетают все экшены мы их фильтруем выбераем нужный
    switchMap(() => {
      const token = this.presistaneService.get('accessToken')
      if(!token) {
        return of(getCurrentUserFailureAction())
      }
      return this.authService.getCurrentUser().pipe(
        map((currentUser: CurrentUserInterface) => {
          return getCurrentUserSuccessAction({currentUser})
        }),
        catchError(() => {
          return of(getCurrentUserFailureAction())
        })
      )
    })
  ))

}