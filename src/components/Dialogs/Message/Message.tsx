import classes from "./../Dialogs.module.css";
import {FC} from "react";

const {
    message
} = classes

type PropsType = {
    message: string
}

const Message: FC<PropsType> = (props) => {
    return (
        <div className={message}>
            {props.message}
        </div>
    )
}

export default Message;
