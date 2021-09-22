import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const {
    dialogsList,
    messagesList,
    messenger
} = classes


function Dialogs(props) {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs
        .map((d) => <DialogItem
            key={d.id}
            name={d.name}
            id={d.id}
        />);

    let messagesElements = state.messages
        .map((m) => <Message
            key={m.id}
            message={m.message}
            />
        );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={messenger}>
            <div className={dialogsList}>
                {dialogsElements}
            </div>

            <div className={messagesList}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newMessageBody'}
                    placeholder='Enter your message...'
                    validate={[requiredField, maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs;
