import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI} from "../api/profile-api";

const initialState = {
    posts:
        [
            {id: 1, message: 'Hi. Wassup?', likesCount: 123},
            {id: 2, message: 'Its my first post', likesCount: 11},
            {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing', likesCount: 236},
            {id: 4, message: 'Lorem ipsum dolor sit amet.', likesCount: 18},
        ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: ProfileReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'PROFILE/ADD_POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case 'PROFILE/SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'PROFILE/SET_STATUS': {
            return {...state, status: action.status}
        }
        case 'PROFILE/DELETE_POST': {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case 'PROFILE/SAVE_PHOTO_SUCCESS': {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state
    }
}

// AC

type ProfileReducerActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    addPostCreator: (newPostText: string) => ({type: 'PROFILE/ADD_POST', newPostText} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'PROFILE/SET_USER_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'PROFILE/SAVE_PHOTO_SUCCESS', photos} as const)
}

// thunk

type ThunkType = BaseThunkType<ProfileReducerActionsTypes | FormAction>
export const getProfile = (userId: number): ThunkType => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(actions.setUserProfile(data))
    }
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(actions.setStatus(status))
        }
    } catch (error) {
        // error
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState: any) => {
    const userId = getState().auth.userId
    let data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        if (userId != null) {
            await dispatch(getProfile(userId))
        } else {
            throw new Error('userId cant be null')
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]})) // {'contacts': {'facebook':res...}}
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer
