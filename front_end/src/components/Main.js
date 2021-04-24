import React, { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import Login from "./login-module/login";
import { NavbarDefault } from "./Util/NavbarDefault";
import { RegisterPage } from "./login-module/register";
import { Provider } from "react-redux";
import HomePage from "./Dashboard/dashboard";
import UserDashboard from "./UserDashboard/userdashboard";
import ActiveUsers from "./Users/ActiveUsers";
import RegisteredUsers from "./Users/RegisteredUsers";

class Main extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={NavbarDefault} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/dashboard" component={HomePage} />
                <Route path="/userdashboard" component={UserDashboard} />
                <Route path="/registeredUsers" component={RegisteredUsers} />
                <Route path="/activeUsers" component={ActiveUsers} />
            </div>
        );
    }
}

export default Main;
