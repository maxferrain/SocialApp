import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const {
    dialogsList,
    messagesList,
    messenger
} = classes


function Dialogs(props) {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsPage.dialogs
        .map((d) => <DialogItem
            name={d.name}
            id={d.id}
        />);

    let messagesElements = state.dialogsPage.messages
        .map((m) => <Message
                message={m.message}
            />
        );

    let messageToSend = React.createRef()

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessage(text)
    }

    return (
        <div className={messenger}>
            <div className={dialogsList}>
                {dialogsElements}
            </div>

            <div className={messagesList}>
                {messagesElements}
                <div>
                    <div>
                        <textarea
                            placeholder='Enter your message...'
                            ref={messageToSend}
                            onChange={onMessageChange}
                            value={props.dialogsPage.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
