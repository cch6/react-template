import * as actionType from '../constants/ActionTypes'
import * as userService from '../../services/User'

export const increment = () => ({type: actionType.INCREMENT})

export const loginLoading = (loading) => ({
  type: actionType.USER_LOGIN_LOADING,
  loginLoading: loading
})

export const loginSuccess = (data) => ({
  type: actionType.USER_LOGIN_SUCCESS,
  data: data
})
export const setUserExtInfo = (userExtInfo) => ({
  type: actionType.SET_USER_EXT_INFO,
  userExtInfo: userExtInfo
})
export const login = () => {
  return (dispatch) => {
    // 假接口，看看就行
    // dispatch(loginLoading(true));
    return userService.getLoginUserInfo().then((response) => {
      let userData = response['data']
      if (userData) {
        // let roles = userData['roles'] || null
        dispatch(loginSuccess({
          isLogin: true,
          loginUserInfo: userData,
          loginUserId: userData['loginId'] || null,
          loginUserName: userData['userName'] || null,
          userRole: userData['roles'] || null,
          isRootRole: userData['isRoot'] || false
        }))
        userService.getLoginUserExtInfo().then((response) => {
          dispatch(setUserExtInfo(response['data']))
          dispatch(loginLoading(false))
        })
      }
    }).catch((e) => {
      dispatch(loginLoading(false))
    })
  }
}
