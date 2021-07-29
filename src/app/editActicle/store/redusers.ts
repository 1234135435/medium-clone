import { Action, createReducer, on } from "@ngrx/store";
import { editArticleAction, editArticleFailureAction, editArticleSuccessAction } from "./actions/editAction";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "./actions/getArticle.action";
import { EditArticleStateInterface } from "./types/editArticleState.interface";

const initialState: EditArticleStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null
}

const editActionReduser = createReducer(
  initialState,
  on(
    editArticleAction, 
    (state):EditArticleStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    editArticleSuccessAction, 
    (state):EditArticleStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    editArticleFailureAction, 
    (state, action):EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
  on(
    getArticleAction, 
    (state):EditArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction, 
    (state, action):EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
      article: action.article
    })
  ),
  on(
    getArticleFailureAction, 
    (state):EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoading: false,
    })
  ),

)

export function reduser(state: EditArticleStateInterface, action: Action){
  return editActionReduser(state, action)
}