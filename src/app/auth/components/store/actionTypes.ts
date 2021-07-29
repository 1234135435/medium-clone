export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register seccess',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login seccess',
  LOGIN_FAILURE = '[Auth] Login failure',

  GET_CURRENT_URES = '[Auth] get current user',
  GET_CURRENT_URES_SUCCESS = '[Auth] get current user seccess',
  GET_CURRENT_URES_FAILURE = '[Auth] get current user failure',

  UPDATA_CURRENT_URES = '[Auth] Updata current user',
  UPDATA_CURRENT_URES_SUCCESS = '[Auth] Updata current user seccess',
  UPDATA_CURRENT_URES_FAILURE = '[Auth] Updata current user failure',

  LOGOUT = '[Auth] Logout'
}