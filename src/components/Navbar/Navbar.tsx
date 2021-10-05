import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {Icon} from '@iconify/react';
import tvIcon from '@iconify-icons/feather/tv';
import user from "@iconify-icons/feather/user";
import messageOutlined from '@iconify-icons/ant-design/message-outlined';
import music from "@iconify-icons/feather/music";
import settings from "@iconify-icons/feather/settings";
import users from "@iconify-icons/feather/users";
import {FC} from "react";

const {
    nav, item, activeLink, scrollBar, newsfeedIcon, iconRound, profileIcon,
    navCard, navCaption, messengerIcon, musicIcon, settingsIcon
} = classes;

const Navbar: FC = () => {

    return (
        <nav className={`${nav} ${scrollBar}`}>
            <div className={navCard}>
                <div className={navCaption}>
                    <span>New Feeds</span>
                </div>


                <div className={item}>
                    <NavLink
                        to="/profile"
                        activeClassName={activeLink}
                    >
                        <i className={`${profileIcon} ${iconRound}`}>
                            <Icon icon={user}/></i>
                        <span>My profile</span>
                    </NavLink>
                </div>

                <div className={item}>
                    <NavLink
                        to="/dialogs"
                        activeClassName={activeLink}
                    >
                        <i className={`${messengerIcon} ${iconRound}`}><Icon icon={messageOutlined}/></i>
                        <span>Messenger</span>
                    </NavLink>
                </div>

                <div className={item}>
                    <NavLink
                        to="/users"
                        activeClassName={activeLink}
                    >
                        <i className={`${musicIcon} ${iconRound}`}><Icon icon={users}/></i>
                        <span>Users</span>
                    </NavLink>
                </div>
                <div className={item}>
                    <NavLink
                        to="/feed"
                        activeClassName={activeLink}
                    >
                        <i className={`${newsfeedIcon} ${iconRound}`}><Icon icon={tvIcon}/></i>
                        <span>News</span>
                    </NavLink>
                </div>
                <div className={item}>
                    <NavLink
                        to="/music"
                        activeClassName={activeLink}
                    >
                        <i className={`${musicIcon} ${iconRound}`}><Icon icon={music}/></i>
                        <span>Music</span>
                    </NavLink>
                </div>
                <div className={item}>
                    <NavLink
                        to="/settings"
                        activeClassName={activeLink}
                    >
                        <i className={`${settingsIcon} ${iconRound}`}><Icon icon={settings}/></i>
                        <span>Settings</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
