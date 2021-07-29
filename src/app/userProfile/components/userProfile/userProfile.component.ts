import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { select, Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { filter, finalize, map, take } from "rxjs/operators";
import { currentUserSelector } from "src/app/auth/components/store/selectors";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { GetUserProfileAction } from "../../store/actions/getUserProfile.action";
import { errorSelector, isLoadingSelector, userProfileSelector } from "../../store/selectors";
@UntilDestroy()
@Component({
  selector: 'mc-user-profile',
  templateUrl: './userProfile.component.html'
})

export class UserProfileComponent implements OnInit, OnDestroy{
  userProfile: ProfileInterface
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  slug: string
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  private initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))    
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(currentUserSelector), filter(x => !!x)),
      this.store.pipe(select(userProfileSelector), filter(x => !!x))
    ]).pipe(
      map(([currentUser, userProfile]: [CurrentUserInterface, ProfileInterface]) => {
        return currentUser.username === userProfile.username
      })
    )
  }
  private fetchData(){
    this.store.dispatch(GetUserProfileAction({slug: this.slug}))
  }

  private initializeListeners() {
    this.store.pipe(
      select(userProfileSelector),
      filter(x => !!x),
      untilDestroyed(this)
    ).subscribe(profile => {
      this.userProfile = profile
    })
    this.route.params.pipe(
      untilDestroyed(this)
    ).subscribe((params: Params) => {
      this.slug = params.slug
      this.fetchData()
    })
  }
  getApiurl() {
    const isFavorites = this.router.url.includes('favorites')
    return this.apiUrl = isFavorites ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`
  }

  ngOnDestroy() {}
  
}