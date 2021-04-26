import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { backend } from "../../webConfig";
import { UserSidebar } from "../Util/UserLayout";
import roboImage from "../Util/roboImage.jpeg";

class UserBilling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            billing: ''
        };
    }
    componentDidMount() {
        axios
            .get(backend + "/api/account/userBilling", {
                params: {
                    user_id: localStorage.getItem('user_Id')
                }
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.data) {
                    this.setState({ billing: response.data.payload[0].summ })
                }
            });
    }

    render() {
        let billing = this.state.billing;
        return (
            <div>
                <UserSidebar>
                    <br />
                    <h2 style={{ marginLeft: "10%", fontSize: "20px" }}> User Billing Info : {billing}</h2>
                    <br />
                    <p style={{ marginLeft: "10%" }}>This billing is based on the time that you have spend working on all the registered robots... More info will ne provided on this screen in our next update</p>
                </UserSidebar>
            </div >
        );
    }
}

export default UserBilling;
