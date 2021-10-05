import {createField, GetStringKeys, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import classes from "./ProfileInfo.module.css";
import s from "../../common/FormsControls/FormsControls.module.css";
import {FC} from "react";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

export const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = (
    {handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {
                error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <b>Full Name:</b> {createField('Fullname', 'fullName', [], Input)}
            </div>
            <div>
                <b>About me:</b>
                {createField<ProfileTypeKeys>('Tell about yourself', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Looking for a job:</b>
                {createField<ProfileTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>Skills:</b>
                {createField<ProfileTypeKeys>('My Professional Skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts)
                    .map(key => <div key={key} className={classes.contact}>
                        <b>{key}:{createField(key, 'contacts.' + key, [], Input)}</b></div>)}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataReduxForm
