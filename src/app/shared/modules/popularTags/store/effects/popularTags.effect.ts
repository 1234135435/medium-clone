import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/internal/operators";
import { PopularTagsType } from "src/app/shared/types/popularType.type";
import { PopularTagsService } from "../../services/popularTags.service";
import { getTegPopularTagsAction, getTegPopularTagsFailureAction, getTegPopularTagsSuccessAction } from "../actions/popularTags.action";

@Injectable()

export class PopularTagsEffect{
  
  constructor(private action$: Actions, private popularTegsService: PopularTagsService){}
  
  getPopularTags = createEffect(() => this.action$.pipe(
    ofType(getTegPopularTagsAction),
    switchMap(() => {
      return this.popularTegsService.getPopularTags().pipe(
        map((popularTags: PopularTagsType[]) => {
          return getTegPopularTagsSuccessAction({tags: popularTags})
        }),
        catchError(() => of(getTegPopularTagsFailureAction()))
      )
    })
  ))
}