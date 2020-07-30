import produce from "immer"
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../sagas/user"

export const initialState = {
  isLoggingIn: false,
  loginErrorReason: "",
  me: null,
  userInfo: null,
}

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.isLoggingIn = true
        draft.loginErrorReason = ""
        break
      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false
        draft.me = action.data
        break
      case LOG_IN_FAILURE:
        draft.me = null
        draft.isLoggingIn = false
        draft.loginErrorReason = action.error
        break
    }
  })
}

export default reducer
