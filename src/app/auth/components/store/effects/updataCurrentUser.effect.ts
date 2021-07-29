import { HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { of } from "rxjs"
import { catchError, map, switchMap } from "rxjs/internal/operators"
import { AuthService } from "src/app/auth/services/auth.service"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"
import { updataCurrentUserAction, upadaCurrentUserFailureAction, upadaCurrentUserSuccessAction } from "../action/updataCurrentUser.action"

@Injectable()

export class UpdataCurrentUserEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
  
  updataCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(updataCurrentUserAction), 
    switchMap(({currentUserInput}) => {
      return this.authService.updataCurrentUser(currentUserInput).pipe(
        map((currentUser: CurrentUserInterface) => {
          return upadaCurrentUserSuccessAction({currentUser})
        }),
        catchError((errorRespons: HttpErrorResponse) => {
          return of(upadaCurrentUserFailureAction({errors: errorRespons.error?.errors}))
        })
      )
    })
  ))

}