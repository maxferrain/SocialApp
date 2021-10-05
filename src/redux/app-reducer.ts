import {getAuthUserData} from "./auth-reducer"
import {InferActionsTypes} from "./redux-store";

const initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: AppReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALIZED-SUCCESS': {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

type AppReducerActionsTypes = InferActionsTypes<typeof actions>

const actions = {
    initializedSuccess: () => ({type: 'APP/INITIALIZED-SUCCESS'} as const) // redux-ducks
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess())
        })
}

export default appReducer
