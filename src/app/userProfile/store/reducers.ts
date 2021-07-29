import { Action, createReducer, on } from "@ngrx/store";
import { UserProfileStateInterface } from "../types/userProfileState.interface";
import { GetUserProfileAction, GetUserProfileFailureAction, GetUserProfileSuccessAction } from "./actions/getUserProfile.action";

const initialState: UserProfileStateInterface = {
  data:  null,
  isLoading: false,
  error: null
}

const userProfilereducer = createReducer(
  initialState,
  on(
    GetUserProfileAction,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    GetUserProfileSuccessAction,
    (state, action) => ({
      ...state,
      data: action.profile,
      isLoading: false
    })
  ),
  on(
    GetUserProfileFailureAction,
    (state) => ({
      ...state,
      isLoading: false
    })
  )
)

export function reduces(state: UserProfileStateInterface, action: Action) {
  return userProfilereducer(state, action)
}