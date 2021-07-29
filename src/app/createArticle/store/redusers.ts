import { Action, createReducer, on } from "@ngrx/store";
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from "./actions/createAction";
import { CreateArticleStateInterface } from "./types/createArticleState.interface";

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null
}

const createActionReduser = createReducer(
  initialState,
  on(
    createArticleAction, 
    (state):CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    createArticleSuccessAction, 
    (state):CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    createArticleFailureAction, 
    (state, action):CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
)

export function reduser(state: CreateArticleStateInterface, action: Action){
  return createActionReduser(state, action)
}