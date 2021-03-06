import React, {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapPropsType = {
    isAuth: boolean
}
// type DispatchPropsType = {
//     fake: () => void
// }

const mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<WCP>(WrappedComponent: ComponentType<WCP>) { // wrapped component props

    const RedirectComponent: FC < MapPropsType> = (props) => {
        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <WrappedComponent {...restProps as unknown as WCP}/>
    }

    return connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
}
