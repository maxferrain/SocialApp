import classes from './Header.module.css'
import logo from './../../logo.svg'
import profileIcon from '../../assets/images/profile.png'
import {Link, NavLink} from 'react-router-dom'
import React, {FC} from 'react'
import {Avatar, Button, Col, Layout, Menu, Row} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import {useDispatch, useSelector} from 'react-redux'
import {selectCurrentUserLogin, selectIsAuth} from '../../redux/auth-selectors'
import {logout} from '../../redux/auth-reducer'

const {header, headerIcon, loginBlock} = classes

type PropsType = {}

export const Header: FC<PropsType> = (props) => {
    const {Header} = Layout

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }

    return (
        <Header className="header">
            <div className="logo"/>
            <Row>
                <Col span={20}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/users">People</Link></Menu.Item>
                    </Menu>
                </Col>

                {isAuth ?
                    <>
                        <Col span={1}>
                            <Avatar alt={login || ''} style={{backgroundColor: '#bec0ff'}} icon={<UserOutlined/>}/>
                        </Col>
                        <Col span={3}>
                            <Button onClick={logoutCallback}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={4}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Col>
                }
            </Row>
        </Header>

        // <header className={header}>
        //     <div>
        //         <img src={logo}/>
        //     </div>
        //
        //     <div className={loginBlock}>
        //         <div className={headerIcon}>
        //             <img src={profileIcon}/>
        //         </div>
        //         {props.isAuth
        //             ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
        //             : <NavLink to={'/login'}>Login</NavLink>}
        //     </div>
        // </header>
    )
}

