// import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// const {content} = classes;

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
            />
        </div>
    );
}

export default Profile;
