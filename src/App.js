import {Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import './App.css';

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header hi='ho'/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}
                />
                <Route
                    path='/profile'
                    render={() => <Profile/>}
                />
                <Route path='/feed'/>
                <Route path='/music'/>
                <Route path='/settings'/>
            </div>
        </div>
    );
}

export default App;
