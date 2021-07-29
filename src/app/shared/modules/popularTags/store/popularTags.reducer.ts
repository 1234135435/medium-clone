import { Action, createReducer, on } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popularTagsState.interface";
import { getTegPopularTagsAction, getTegPopularTagsFailureAction, getTegPopularTagsSuccessAction } from "./actions/popularTags.action";

const initialState: PopularTagsStateInterface = {
  data: null,
  error: null,
  isLoading: false
}

const PopularTagsReducer = createReducer(
  initialState,
  on(getTegPopularTagsAction, 
    (state): PopularTagsStateInterface => ({
    ...state,
    isLoading: true
    })
  ),
  on(getTegPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      data: action.tags,
      isLoading: false
    })
  ),
  on(getTegPopularTagsFailureAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export function reducer(state: PopularTagsStateInterface, action: Action) {
  return PopularTagsReducer(state, action);
}