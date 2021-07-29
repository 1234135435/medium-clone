import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../../types/authState.interface";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "./action/getCurrentUser.action";
import { loginAction, loginFailureAction, loginSuccessAction } from "./action/login.action";
import { registerAction, registerFailureAction, registerSuccessAction } from "./action/register.action";
import { logoutAction } from "./action/sync.action";
import { upadaCurrentUserSuccessAction } from "./action/updataCurrentUser.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null
}

const authReducer = createReducer(
    initialState,
    on(registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true,
        validationErrors: null
      })
    ),
    on(registerSuccessAction, (state, action):AuthStateInterface => ({
        ...state,
        isSubmitting: false,
        isLoggedIn: true,
        currentUser: action.currentUser
      })
    ),
    on(registerFailureAction, (state, action):AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
    on(loginAction, (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    }) 
  ),
    on(loginSuccessAction, (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    }) 
  ),
    on(loginFailureAction, (state, action):AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  ),
    on(getCurrentUserAction, (state) => ({
      ...state,
      isLoading: true
    })
  ),
    on(getCurrentUserSuccessAction, (state, action) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
    on(getCurrentUserFailureAction, (state) => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null
    })
  ),
    on(upadaCurrentUserSuccessAction, (state, action) =>({
      ...state,
      currentUser: action.currentUser
    })
  ), on(logoutAction, () => ({
    ...initialState,
    isLoggedIn: false
  }))
)

export function reducer(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}