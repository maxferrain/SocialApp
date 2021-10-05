import {actions} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ComponentType} from "react";

let mapStateToProps = (state: AppStateType) => { // data from state
    return {
        dialogsPage: state.dialogsPage
    }
}

// let mapDispatchToProps = (dispatch) => { // callbacks
//     return {
//         sendMessage: (newMessageBody) => {
//             dispatch(actions.sendMessage(newMessageBody))
//         }
//     }
// }

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

export default compose<ComponentType>(
    connect(mapStateToProps, {sendMessage: actions.sendMessage}),
    withAuthRedirect,
) (Dialogs);
