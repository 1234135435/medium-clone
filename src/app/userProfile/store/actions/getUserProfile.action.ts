import { createAction, props } from "@ngrx/store";
import { ProfileInterface } from "src/app/shared/types/profile.interface";
import { ActionType } from "../ActionType";

export const GetUserProfileAction = createAction(
  ActionType.GET_USER_PROFILE,
  props<{slug: string}>()
)

export const GetUserProfileSuccessAction = createAction(
  ActionType.GET_USER_PROFILE_SUCCESS,
  props<{profile: ProfileInterface}>()
)

export const GetUserProfileFailureAction = createAction(
  ActionType.GET_USER_PROFILE_FAILURE
)