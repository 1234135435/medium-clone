import { createAction, props } from "@ngrx/store";
import { ArticlesInterface } from "src/app/shared/types/articles.interface";
import { ActionType } from "../actionType";

export const AddToFavoritesAction = createAction(
  ActionType.ADD_TO_FAVORITES,
  props<{isFavorited: boolean, slug: string}>()
)

export const AddToFavoritesSuccessAction = createAction(
  ActionType.ADD_TO_FAVORITES_SUCCESS,
  props<{article: ArticlesInterface}>()
)

export const AddToFavoritesFailureAction = createAction(
  ActionType.ADD_TO_FAVORITES_FAILURE
)