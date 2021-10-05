import {ChangeEvent, FC, useState} from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userIcon from "../../../assets/images/userIcon.png";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";

const {descriptionBlock, mainPhoto} = classes;

type PropsType = {
    profile: ProfileType | null,
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        // todo remove then
        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    return (
        <div>
            <div className={descriptionBlock}>
                <img src={profile.photos.large || userIcon} className={mainPhoto} alt={''}/>
                {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}
                    />
                }
            </div>
        </div>
    );
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner &&
            <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full Name:</b> {profile.fullName}
            </div>
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yep' : 'nope'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>Skills:</b> {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Contacts</b>:
                {Object
                    .keys(profile.contacts)
                    .map(key => <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={profile.contacts[key as keyof ContactsType]}
                    />)}
            </div>
        </div>
    )
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={classes.contact}><b>{contactTitle}: </b> {contactValue} </div>
    )
}

export default ProfileInfo;
