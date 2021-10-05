import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-apiI";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: AuthReducerActionTypes): InitialStateType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA':
        case 'auth/GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

// AC

type AuthReducerActionTypes = InferActionsTypes<typeof actions>

const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/SET-USER-DATA', payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'auth/GET-CAPTCHA-URL-SUCCESS', payload: {captchaUrl}
    } as const)
}

// thunk

type ThunkType = BaseThunkType<AuthReducerActionTypes | FormAction>

export const getAuthUserData = (): ThunkType => async (dispatch) => {

    let meData = await authAPI.me()

    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === ResultCodesEnum.Success) {
        // success auth data
        await dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl())
        }
        let msg = data.messages.length > 0 ? data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', {_error: msg})) //AC
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }

}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
