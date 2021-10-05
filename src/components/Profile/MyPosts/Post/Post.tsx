import classes from "./Post.module.css";
import {FC} from "react";
const {item} = classes;

type PropsType = {
    message: string
    likesCount: number
}

const Post: FC<PropsType> = (props) => {

    return (
        <div>
            <div className={item}>
                <img
                    src='https://images.unsplash.com/photo-1574158622682-e40e69881006?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' alt={''}/>
                {props.message}
                <div>
                    <span>Like: {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post
