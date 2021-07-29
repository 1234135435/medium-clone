import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/internal/operators";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { UserProfileService } from "../../services/userProfile.service";
import { GetUserProfileAction, GetUserProfileFailureAction, GetUserProfileSuccessAction } from "../actions/getUserProfile.action";

@Injectable()
export class GetUserProfilEffect {
  constructor(private actions$: Actions, private userProfileService: UserProfileService) {}

  getUserProfile$ = createEffect(() => this.actions$.pipe(
    ofType(GetUserProfileAction),
    switchMap(({slug}) => {
      return this.userProfileService.getUserProfile(slug).pipe(
        map((profile: ProfileInterface) => {
          return GetUserProfileSuccessAction({profile})
        }),
        catchError(() => {
          return of(GetUserProfileFailureAction())
        })
      )
    })
  ))
}