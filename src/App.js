import React, { Component } from 'react';
import MyRoom from './Containers/MyRoom/MyRoom'
import Login from './Containers/Login/Login'
import Registration from './Containers/Registraion/Registration'
import ResetPassword from './Containers/ResetPassword/ResetPassword'
import NewPassword from './Containers/newPassword/NewPassword'
import UserAccount from './Containers/UsersAccount/UsersAccount'
import FullUserAccount from './Containers/UsersAccount/FullUserAccount'
import MyEvents from './Containers/MyEvents/MyEvents'
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <MyRoom />
            <Login/>
            <Registration />
            <ResetPassword />

            <NewPassword />
            <UserAccount />
            <FullUserAccount />
            <MyEvents />
        </div>

    );
  }
}

export default App;
