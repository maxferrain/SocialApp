import {BrowserRouter, Route, withRouter, HashRouter, Switch, Redirect, NavLink, Link} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import {UsersPage} from './components/Users/UsersContainer'
import './App.css'
import 'antd/dist/antd.css'
import HeaderContainer from './components/Header/HeaderContainer'
import {LoginPage} from './components/Login/LoginPage'
import React, {ComponentType, FC} from 'react'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import store, {AppStateType} from './redux/redux-store'
import {withSuspense} from './hoc/withSuspense'

import {Layout, Menu, Breadcrumb, Avatar, Row, Col} from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {Icon} from '@iconify/react'
import user from '@iconify-icons/feather/user'
import messageOutlined from '@iconify-icons/ant-design/message-outlined'
import users from '@iconify-icons/feather/users'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}
const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert('Error has occurred')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        const { SubMenu } = Menu;
        const { Header, Content, Footer, Sider } = Layout;

        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Row>
                        <Col span={22}>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="1"><Link to="/users">People</Link></Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={2}>
                            <Avatar style={{ backgroundColor: '#7177ff' }} icon={<UserOutlined />} />
                        </Col>
                    </Row>

                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Profile">
                                    <Menu.Item key="1"><Link to="/profile" >My profile</Link></Menu.Item>
                                    <Menu.Item key="2"> <Link to="/dialogs">Messenger</Link></Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Community">
                                    <Menu.Item key="5"><Link to="/users">Friends</Link></Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                     <Switch>
                                         <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                                         <Route path="/dialogs"
                                               render={() => <SuspendedDialogs/>}
                                        />
                                        <Route path="/profile/:userId?"
                                               render={() => <SuspendedProfile/>}
                                        />
                                        <Route path="/users"
                                               render={() => <UsersPage pageTitle={'All Users'}/>}
                                        />
                                        <Route path="/login"
                                               render={() => <LoginPage/>}
                                        />
                                        <Route path="/feed"/>
                                        <Route path="/music"/>
                                        <Route path="/settings"/>
                                        <Route path="*" render={() => <Redirect to={'/profile'}/>}/>
                                    </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Max Ferrain Development ©2021 </Footer>
            </Layout>
            // <div className="app-wrapper">
            //     <HeaderContainer/>
            //     <Navbar/>
            //     <div className="app-wrapper-content">
            //         <Switch>
            //             <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
            //             <Route path="/dialogs"
            //                    render={() => <SuspendedDialogs/>}
            //             />
            //             <Route path="/profile/:userId?"
            //                    render={() => <SuspendedProfile/>}
            //             />
            //             <Route path="/users"
            //                    render={() => <UsersPage pageTitle={'All Users'}/>}
            //             />
            //             <Route path="/login"
            //                    render={() => <LoginPage/>}
            //             />
            //             <Route path="/feed"/>
            //             <Route path="/music"/>
            //             <Route path="/settings"/>
            //             <Route path="*" render={() => <Redirect to={'/profile'}/>}/>
            //         </Switch>
            //     </div>
            // </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({initialized: state.app.initialized})

const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const CiaoApp: FC = () => {
    return (
        // <BrowserRouter basename={process.env.PUBLIC_URL}>
        <BrowserRouter>
            {/*<HashRouter>*/}
            <Provider store={store}>
                <AppContainer/>
            </Provider>
            {/*</HashRouter>*/}
        </BrowserRouter>
    )
}

export default CiaoApp
