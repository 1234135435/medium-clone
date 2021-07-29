import { Action, createReducer, on } from "@ngrx/store"
import { updataCurrentUserAction, upadaCurrentUserFailureAction, upadaCurrentUserSuccessAction } from "src/app/auth/components/store/action/updataCurrentUser.action"
import { SettingStateInterface } from "./types/settingState.interface"


const initialState: SettingStateInterface = {
  isSubmitting: false,
  validationErrors: null
}

const settingsReducer = createReducer(
  initialState,
  on(
    updataCurrentUserAction, 
    (store) => ({
      ...store,
      isSubmitting: true
    })
  ),
  on(
    upadaCurrentUserSuccessAction, 
    (store) => ({
      ...store,
      isSubmitting: false
    })
  ),
  on(
    upadaCurrentUserFailureAction, 
    (store, action) => ({
      ...store,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
)

export function reducer(state: SettingStateInterface, action: Action) {
  return settingsReducer(state, action)
}