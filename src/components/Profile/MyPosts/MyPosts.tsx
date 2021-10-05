import React, {FC, memo} from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import AddNewPostForm, {AddPostFormValuesType} from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";

const {postsBlock, posts} = classes;

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}
type PropsType = MapPropsType & DispatchPropsType

const MyPosts: FC<PropsType> = memo(props => {
    const postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddNewPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <AddNewPostForm onSubmit={onAddNewPost}/>
                </div>
                <div className={posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
})

export default MyPosts;
