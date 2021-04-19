import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./login-module/login";
import { NavbarDefault } from "./Util/NavbarDefault";
import { RegisterPage } from "./login-module/register";
import store from "../store";
import { Provider } from "react-redux";
import HomePage from "./Dashboard/dashboard";
import UserDashboard from "./UserDashboard/userdashboard";

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Route path="/" component={NavbarDefault} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/dashboard" component={HomePage} />
                    <Route path="/userdashboard" component={UserDashboard} />
                </div>
            </Provider>
        );
    }
}

export default Main;
