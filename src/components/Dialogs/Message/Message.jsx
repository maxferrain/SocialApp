import classes from "./../Dialogs.module.css";

const {
    message
} = classes

function Message(props) {
    return (
            <div className={message}>
                {props.message}
            </div>
    )
}

export default Message;
