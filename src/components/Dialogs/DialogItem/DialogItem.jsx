import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const {
    dialog
} = classes

function DialogItem(props) {

    const path = '/dialogs/' + props.id;

    return (
        <div
            className={dialog}
        >
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;
