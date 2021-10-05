import classes from "./Header.module.css";
import logo from './../../logo.svg'
import profileIcon from '../../assets/images/profile.png'
import {NavLink} from "react-router-dom";
import {FC} from "react";

const {header, headerIcon, loginBlock} = classes;

export type MapPropsType = {
    isAuth: boolean
    login: string | null
}
export type DispatchPropsType = {
    logout: () => void
}
type PropsType =  MapPropsType & DispatchPropsType

const Header: FC<PropsType> = (props) => {
    return (
        <header className={header}>
            <div>
                <img src={logo}/>
            </div>

            <div className={loginBlock}>
                <div className={headerIcon}>
                    <img src={profileIcon}/>
                </div>
                {props.isAuth
                    ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header
