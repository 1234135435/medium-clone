import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AppStateInterface } from "src/app/shared/types/appState.interface"
import { EditArticleStateInterface } from "./types/editArticleState.interface"

export const editArticleSelector = createFeatureSelector<
AppStateInterface, 
EditArticleStateInterface>('editArticle')


export const isSubmittingSelector = createSelector(
  editArticleSelector, 
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
)

export const validationErrorSelector = createSelector(
  editArticleSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.validationErrors
)

export const isLoadingSelector = createSelector(
  editArticleSelector, 
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
)

export const getArticleSelector = createSelector(
  editArticleSelector, 
  (editArticleState: EditArticleStateInterface) => editArticleState.article
)
