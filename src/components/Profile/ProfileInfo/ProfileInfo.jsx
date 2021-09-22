import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const {descriptionBlock} = classes;

function ProfileInfo({profile, status, updateStatus}) {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        width='800px'*/}
            {/*        src='https://images.unsplash.com/photo-1623650915002-4a0819173cd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={descriptionBlock}>
                <img src={profile.photos.large}/>
                <div>
                    {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                    {/*{props.profile.aboutMe}*/}
                    {/*{props.profile.lookingForAJob === true ? 'YES' : 'NO'}*/}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
