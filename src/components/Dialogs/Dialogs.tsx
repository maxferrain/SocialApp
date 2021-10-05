import React, {FC} from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {InitialStateType} from "../../redux/dialogs-reducer";

const {
    dialogsList,
    messagesList,
    messenger
} = classes

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormType = {
    newMessageBody: string
}
type NewMessageFormTypeKeys = Extract<keyof NewMessageFormType, string> // only strings

const Dialogs: FC<PropsType> = (props) => {

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

    let addNewMessage = (values: NewMessageFormType) => {
        props.sendMessage(values.newMessageBody)
    }

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


type PropsTypeForm = {}

const maxLen50 = maxLengthCreator(50)
const AddMessageForm: FC<InjectedFormProps<NewMessageFormType, PropsTypeForm> & PropsTypeForm> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormTypeKeys>(
                    'Enter your message...', 'newMessageBody',
                    [requiredField, maxLen50], Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<NewMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
