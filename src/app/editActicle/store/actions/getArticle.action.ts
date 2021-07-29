import { createAction, props } from "@ngrx/store"
import { ArticlesInterface } from "src/app/shared/types/articles.interface"
import { ActionType } from "../actionType"

export const getArticleAction = createAction(
  ActionType.GET_ACTICLE,
  props<{slug: string}>()
)

export const getArticleSuccessAction = createAction(
  ActionType.GET_ACTICLE_SUCCESS,
  props<{article: ArticlesInterface}>()
)

export const getArticleFailureAction = createAction(
  ActionType.GET_ACTICLE_FAILURE
)