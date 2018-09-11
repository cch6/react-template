import {USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, SET_USER_EXT_INFO} from '../constants/ActionTypes'

const initialState = {
  isLogin: false,
  loginLoading: true,
  loginUserInfo: null,
  loginUserId: null,
  loginUserName: null,
  userRole: null,
  isRootRole: false,
  userExtInfo: {}
}

export default function login (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return {...state, loginLoading: action.loginLoading}
    case USER_LOGIN_SUCCESS:
      return Object.assign({}, {...state}, action.data)
    case SET_USER_EXT_INFO:
      return {...state, userExtInfo: action.userExtInfo}
    default:
      return state
  }
}
