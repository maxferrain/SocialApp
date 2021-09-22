const SEND_MESSAGE = 'SEND-MESSAGE'

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: action.newMessageBody}]
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer
