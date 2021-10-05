import {requiredField} from "../../../../utils/validators/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../../../common/FormsControls/FormsControls";
import React, {FC} from "react";

type PropsType = {}


export type AddPostFormValuesType = {
    newPostText: string
}
type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const AddNewPostForm: FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>('What\'s new?','newPostText',[requiredField], Input)}
                {/*<Field*/}
                {/*    component={Textarea} name={'post'} placeholder={'Post text'} //name=post*/}
                {/*    validate={[requiredField, maxLC10]}/>*/}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
export default  reduxForm<AddPostFormValuesType, PropsType>({form: 'profile-ass-post'}) (AddNewPostForm) //postsAddForm
