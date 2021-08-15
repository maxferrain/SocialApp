import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts:
                [
                    {id: 1, message: 'Hi. Wassup?', likesCount: 123},
                    {id: 2, message: 'Its my first post', likesCount: 11},
                    {
                        id: 3,
                        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eos.',
                        likesCount: 236
                    },
                    {id: 4, message: 'Lorem ipsum dolor sit amet.', likesCount: 18},
                ],
            newPostText: 'SampeText123'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('subscribe')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) { //type: 'ADD-POST'
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}


export default store
