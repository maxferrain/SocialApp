import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const {postsBlock, posts} = classes;

const maxLC10 = maxLengthCreator(10)
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea} name={'post'} placeholder={'Post text'}
                    validate={[requiredField, maxLC10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm({form: 'postsAddForm'}) (AddNewPostForm)

const MyPosts = React.memo(props => {
    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddNewPost = (values) => {
        props.addPost(values.post);
    }
    return (
        <div className={postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <AddPostReduxForm onSubmit={onAddNewPost}/>
                </div>
                <div className={posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
});

export default MyPosts;
