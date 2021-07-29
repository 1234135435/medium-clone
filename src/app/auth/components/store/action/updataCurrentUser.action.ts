import { createAction, props } from "@ngrx/store"
import { BackendErrorInterface } from "src/app/shared/types/backendErrors.interface"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"
import { CurrentUserInputInterface } from "src/app/shared/types/currentUserInput.interface"
import { ActionTypes } from "../actionTypes"

export const updataCurrentUserAction = createAction(
  ActionTypes.UPDATA_CURRENT_URES, 
  props<{currentUserInput: CurrentUserInputInterface}>()
)

export const upadaCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATA_CURRENT_URES_SUCCESS,
  props<{currentUser: CurrentUserInterface}>()
)

export const upadaCurrentUserFailureAction = createAction(
  ActionTypes.UPDATA_CURRENT_URES_FAILURE,
  props<{errors: BackendErrorInterface}>()
)