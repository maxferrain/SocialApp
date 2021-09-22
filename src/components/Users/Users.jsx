import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
                {
                    users.map(u => <User
                        user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />)
                }
            </div>
        </div>
    )
}
export default Users
