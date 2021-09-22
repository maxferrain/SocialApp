// import classes from "./ProfileInfo.module.css";
// import Preloader from "../../common/Preloader/Preloader";
// const {descriptionBlock} = classes;

import {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

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
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
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
