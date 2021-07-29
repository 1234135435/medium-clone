import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const deletArticleAction = createAction(
  ActionTypes.DELET_ARTICLE,
  props<{slug: string}>()
)

export const deletArticleSuccessAction = createAction(
  ActionTypes.DELET_ARTICLE_SUCCESS,
)

export const deletArticleFailureAction = createAction(
  ActionTypes.DELET_ARTICLE_FAILURE
)