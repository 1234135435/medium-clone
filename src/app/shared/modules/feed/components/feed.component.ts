import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { getFeedAction } from "../store/actions/getFeed.action";
import { errorSelector, feedSelector, isLoadingSelector } from "../store/selectors";
import { GetFeedResponseInterface } from "../type/get-feed-responseI.iterface";
import { parseUrl, stringify } from 'query-string'
@UntilDestroy()
@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})

export class FeedComponent implements OnInit, OnChanges, OnDestroy{
  @Input('apiUrl') apiUrlProps: string
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>
  limit = environment.limit
  baseUrl: string
  currentPage: number

  constructor(private store: Store, private router: Router, private rout: ActivatedRoute) {}

  ngOnInit(){
    this.initializeValues()
    this.initializeListener()
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanges = !changes.apiUrlProps.firstChange && 
    changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue
    if(isApiUrlChanges) { // выполнить в том случае если урл "попул. тег" поменяеться.
      this.fetchFeed()
    }
    // console.log(isApiUrlChanges)
  }

  initializeValues(){
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  initializeListener(){
    this.rout.queryParams.pipe(untilDestroyed(this)).subscribe((params: Params) => {
      this.currentPage = Number(params.page || '1')
      // console.log('currentPage', this.currentPage)
      this.fetchFeed()
    })
  }

  fetchFeed(){
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = parseUrl(this.apiUrlProps) // доп. биб-к. помогает собрать урл.
    const stringifyParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifyParams}`
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }

  ngOnDestroy(): void {}
}