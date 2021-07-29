import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/internal/operators";
import { FeedService } from "../../service/feed.service";
import { GetFeedResponseInterface } from "../../type/get-feed-responseI.iterface";
import { 
  getFeedAction, 
  getFeedFailureAction, 
  getFeedSuccessAction
} from "../actions/getFeed.action";

@Injectable()

export class GetFeedEffect {

  constructor(
    private actions$: Actions,
    private feedService: FeedService
  ) {}

  getFeed$ = createEffect(() => this.actions$.pipe(
    ofType(getFeedAction), // т.к. прилетают все экшены мы их фильтруем выбераем нужный
     switchMap(({url}) => {
      return this.feedService.getFeed(url).pipe(
        map((feed: GetFeedResponseInterface) => {
          return getFeedSuccessAction({feed})
        }),
        catchError(() => {
          return of(getFeedFailureAction())
        })
      )
    })
  ))

}