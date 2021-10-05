import styles from "./Users.module.css";
import userIcon from "../../assets/images/userIcon.png";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";
import {FC} from "react";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User: FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img
                                    src={user.photos.small != null ? user.photos.small : userIcon}
                                    className={styles.userPhoto} alt={''}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}
                                >Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}
                                >Follow</button>
                            }
                        </div>
            </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
            </span>
        </div>
    )
}

export default User
