// import classes from "./ProfileInfo.module.css";
// const {descriptionBlock} = classes;
import {ChangeEvent, FC, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatusWithHooks: FC<PropsType> = (props) => {

    let [editMode, stateEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        stateEditMode(true)
    }
    const deactivateEditMode = () => {
        stateEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b>
                <span
                    onDoubleClick={activateEditMode}
                >{props.status || "Tap to set status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
