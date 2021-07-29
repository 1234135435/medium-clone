import { createAction, props } from "@ngrx/store";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { ActionTypes } from "../actionTypes";

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_URES)

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_URES_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const getCurrentUserFailureAction = createAction(ActionTypes.GET_CURRENT_URES_FAILURE)