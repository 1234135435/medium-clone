import { Component, DoCheck, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";
import { createArticleAction } from "../../store/actions/createAction";
import { isSubmittingSelector, validationErrorSelector } from "../../store/selectors";

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss']
})

export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = { 
    title: '',
    description: '',
    body: '',
    tagList: []
  }
  isSubmitting: Observable<boolean>
  validationErrors: Observable<BackendErrorInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors = this.store.pipe(select(validationErrorSelector))
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(createArticleAction({articleInput}))
  }
}