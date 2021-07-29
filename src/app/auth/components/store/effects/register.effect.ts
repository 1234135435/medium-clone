import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/internal/operators";
import { AuthService } from "src/app/auth/services/auth.service";
import { PresistaneService } from "src/app/shared/services/presistane.service";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { registerAction, registerFailureAction, registerSuccessAction} from "../action/register.action";

@Injectable()

export class RegisterEffect {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private presistaneService: PresistaneService,
    private router: Router
  ) {}
  
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction), // т.к. прилетают все экшены мы их фильтруем выбераем нужный
    switchMap(({request}) => {
      return this.authService.register(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          this.presistaneService.set('accessToken', currentUser.token)
          return registerSuccessAction({currentUser})
        }),
        catchError((errorRespons: HttpErrorResponse) => {
          return of(registerFailureAction({errors: errorRespons.error.errors}))
        })
      )
    })
  ))

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => {
      this.router.navigateByUrl('/')
    })
  ),{dispatch: false}) //<!-- нужен в том случае если нечего не возвращаем
}