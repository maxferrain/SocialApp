const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
    dialogs:
        [
            {id: 1, name: 'Maximilien Ferrain'},
            {id: 2, name: 'Ivan Korneev'},
            {id: 3, name: 'Yves'},
            {id: 4, name: 'Vadim'},
            {id: 5, name: 'Antony'},
        ],
    messages: [
        {id: 1, message: 'Hi, how r u?'},
        {id: 2, message: 'Lets go walk'},
        {id: 3, message: 'The HTML Content Division element'},
        {id: 4, message: 'XML tag has empty body'},
        {id: 5, message: 'Bye!'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(message)
            state.newMessageText = ''
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
}

export default dialogsReducer
