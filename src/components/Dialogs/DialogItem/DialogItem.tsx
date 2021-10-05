import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {FC} from "react";

const {
    dialog
} = classes

type PropsType = {
    id: number
    name: string
}

const DialogItem: FC<PropsType> = (props) => {

    const path = '/dialogs/' + props.id;

    return (
        <div className={dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;
