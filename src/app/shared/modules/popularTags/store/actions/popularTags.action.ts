import { createAction, props } from "@ngrx/store";
import { PopularTagsType } from "src/app/shared/types/popularType.type";
import { ActionTypes } from "../actionTypes";

export const getTegPopularTagsAction = createAction(
  ActionTypes.TEG_POPULAR_TAGS
)

export const getTegPopularTagsSuccessAction = createAction(
  ActionTypes.TEG_POPULAR_TAGS_SUCCESS,
  props<{tags: PopularTagsType[]}>()
)

export const getTegPopularTagsFailureAction = createAction(
  ActionTypes.TEG_POPULAR_TAGS_FAILURE
)