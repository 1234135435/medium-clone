import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { PresistaneService } from "src/app/shared/services/presistane.service";
import { logoutAction } from "../action/sync.action";

@Injectable()
export class LogoutEffect {
  constructor(private actions$: Actions, private presistaneService: PresistaneService, private router: Router) {}

  logout$ = createEffect(()=> this.actions$.pipe(
    ofType(logoutAction),
    tap(() => {
      this.presistaneService.set('accessToken', '')
      this.router.navigateByUrl('/')
    })
  ), {dispatch: false})
}