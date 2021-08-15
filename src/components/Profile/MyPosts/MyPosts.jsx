import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const {postsBlock, posts} = classes;


function MyPosts(props) {
debugger
    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <div><textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}
                    /></div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
