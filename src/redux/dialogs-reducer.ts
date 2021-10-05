import {InferActionsTypes} from "./redux-store";

type DialogType = {
    id: number,
    name: string
}
type MessagesType = {
    id: number,
    message: string
}

const initialState = {
    dialogs:
        [
            {id: 1, name: 'Maximilien Ferrain'},
            {id: 2, name: 'Ivan Korneev'},
            {id: 3, name: 'Yves'},
            {id: 4, name: 'Vadim'},
            {id: 5, name: 'Antony'},
        ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi, how r u?'},
        {id: 2, message: 'Lets go walk'},
        {id: 3, message: 'The HTML Content Division element'},
        {id: 4, message: 'XML tag has empty body'},
        {id: 5, message: 'Bye!'},
    ] as Array<MessagesType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: DialogsReducerActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'dialogs/SEND_MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }
        }
        default:
            return state
    }
}

type DialogsReducerActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    sendMessage: (newMessageBody:string) => ({type: 'dialogs/SEND_MESSAGE', newMessageBody})
}

export default dialogsReducer
