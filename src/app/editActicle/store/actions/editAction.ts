import { createAction, props } from "@ngrx/store";
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface";
import { ActionType } from "../actionType";

export const editArticleAction = createAction(
  ActionType.EDIE_ACTICLE,
  props<{slug: string, articleInput: ArticleInputInterface}>()
)

export const editArticleSuccessAction = createAction(
  ActionType.EDIE_ACTICLE_SUCCESS,
  props<{article: ArticlesInterface}>()
)

export const editArticleFailureAction = createAction(
  ActionType.EDIE_ACTICLE_FAILURE,
  props<{errors: BackendErrorInterface}>()
)