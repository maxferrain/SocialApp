const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts:
        [
            {id: 1, message: 'Hi. Wassup?', likesCount: 123},
            {id: 2, message: 'Its my first post', likesCount: 11},
            {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing', likesCount: 236},
            {id: 4, message: 'Lorem ipsum dolor sit amet.', likesCount: 18},
        ],
    newPostText: 'SampleText123'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }

        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = [...state]
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer
