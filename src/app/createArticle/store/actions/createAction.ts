import { createAction, props } from "@ngrx/store";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";
import { ActionType } from "../actionType";

export const createArticleAction = createAction(
  ActionType.CREATE_ACTICLE,
  props<{articleInput: ArticleInputInterface}>()
)

export const createArticleSuccessAction = createAction(
  ActionType.CREATE_ACTICLE_SUCCESS,
  props<{article: ArticlesInterface}>()
)

export const createArticleFailureAction = createAction(
  ActionType.CREATE_ACTICLE_FAILURE,
  props<{errors: BackendErrorInterface}>()
)