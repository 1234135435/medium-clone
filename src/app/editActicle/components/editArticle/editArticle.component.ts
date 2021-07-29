import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/internal/operators";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";
import { editArticleAction } from "../../store/actions/editAction";
import { getArticleAction } from "../../store/actions/getArticle.action";
import { getArticleSelector, isLoadingSelector, isSubmittingSelector, validationErrorSelector } from "../../store/selectors";

@Component({
  selector: 'mc-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss']
})

export class EditArticleComponent implements OnInit {

  initialValues$: Observable<ArticleInputInterface>
  isSubmitting$: Observable<boolean>
  isLoading$: Observable<boolean>
  validationErrors$: Observable<BackendErrorInterface | null>
  slug: string

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initialazeValue()
    this.fetchData()
  }

  initialazeValue(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationErrorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.initialValues$ = this.store.pipe(
      select(getArticleSelector), 
      filter(x => !!x), 
      map((article: ArticleInputInterface) => ({
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList
      }))
    )
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(editArticleAction({slug: this.slug, articleInput: articleInput}))
  }
}