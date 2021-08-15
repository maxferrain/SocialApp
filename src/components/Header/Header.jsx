import classes from "./Header.module.css";
import logo from './../../logo.svg'
import profileIcon from './../../assets/profile.png'

const {header, headerIcon, headerIcons} = classes;

function Header() {
    return (
        <header className={header}>
            <div>
                <img src={logo}/>
            </div>

                <div className={headerIcon}>
                    <img src={profileIcon}/>
                </div>
        </header>
    );
}

export default Header
