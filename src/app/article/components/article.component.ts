import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { select, Store } from "@ngrx/store";
import { combineLatest, Observable, Subscription, zip } from "rxjs";
import { map } from "rxjs/internal/operators";
import { currentUserSelector } from "src/app/auth/components/store/selectors";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { deletArticleAction } from "../store/actions/deletArticle.action";
import { getArticleAction } from "../store/actions/getArticle.action";
import { articleSelector, errorSelector, isLoadingSelector } from "../store/selectors";
@UntilDestroy()
@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit, OnDestroy {
  article: ArticlesInterface | null
  articleSubscription$: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string>
  isAuhtor$: Observable<boolean | unknown>
  slug: string
  constructor(private store: Store, private router: Router, private rout: ActivatedRoute) {}

  ngOnInit(){
    this.initializeValues()
    this.initializeListener()
  }

  initializeValues(){
    this.rout.params.pipe(
      untilDestroyed(this)
    ).subscribe((param: Params) => {
      this.slug = param.slug
      this.fetchData(param.slug)
    })
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isAuhtor$ = combineLatest([
      this.store.pipe(select(articleSelector)), 
      this.store.pipe(select(currentUserSelector))
    ]).pipe(map(([acticleUser, currentUser]: 
      [ArticlesInterface | null, CurrentUserInterface | null])  => { 
        if(!acticleUser || !currentUser) { return false }
        return acticleUser.author.username === currentUser.username
      }))
  }

  fetchData(slugValue){
    this.store.dispatch(getArticleAction({slug: slugValue}))
  }

  initializeListener() {
    this.articleSubscription$ = this.store.pipe(
      select(articleSelector),
      untilDestroyed(this),
    ).subscribe((article: ArticlesInterface | null) => {
      this.article = article
    })
  }

  deletArticle(){
    this.store.dispatch(deletArticleAction({slug: this.slug}))
  }

  ngOnDestroy(): void {}
}

