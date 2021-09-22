import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => { // data from state
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => { // callbacks
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
) (Dialogs);
