import profileReducer, {actions} from "./profile-reducer";
import {PostType} from "../types/types";

const state = {
    posts:
        [
            {id: 1, message: 'Hi. Wassup?', likesCount: 123},
            {id: 2, message: 'Its my first post', likesCount: 11},
            {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing', likesCount: 236},
            {id: 4, message: 'Lorem ipsum dolor sit amet.', likesCount: 18},
        ] as Array<PostType>,
    profile: null,
    status: ''
}

// export type InitialStateType = typeof initialState
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, any>

test('len of post should be incremented', () => {
    let action = actions.addPostCreator('Hey, React')

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)

    expect(newState.posts[4].message).toBe('Hey, React')
});

test('message of post should be correct', () => {
    let action = actions.addPostCreator('Hey, React')

    let newState = profileReducer(state, action)

    expect(newState.posts[4].message).toBe('Hey, React')
});

test('after del len of msg should be decrement', () => {
    let action = actions.deletePost(1)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
});

test('after del len of msg should`nt be decrement if id is incorrect', () => {
    let action = actions.deletePost(1000)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
});
