import usersReducer, {actions, InitialStateType} from './users-reducer'

let state: InitialStateType

beforeEach(() => {
    state = {
        users: [
            {id: 0, name: 'Mk0', followed: false, photos: {small: null, large: null}, status: 'status0'},
            {id: 1, name: 'Mk1', followed: false, photos: {small: null, large: null}, status: 'status1'},
            {id: 2, name: 'Mk2', followed: true, photos: {small: null, large: null}, status: 'status2'},
            {id: 3, name: 'Mk3', followed: true, photos: {small: null, large: null}, status: 'status3'}
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('follow success', () => {
    const newState = usersReducer(state, actions.followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow success', () => {
    const newState = usersReducer(state, actions.unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})
