import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { backend } from "../../webConfig";
import { Sidebar } from "../Util/Layout";

class ActiveUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        axios
            .get(backend + "/api/users/allActiveUsers", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.data) {
                    this.setState({ users: response.data.payload })
                }
            });
    }

    render() {
        let users = this.state.users.map(
            user => {
                return (
                    <div class="card2">
                        <br />
                        <h2>Welcome Active {user.first_name} {user.last_name} </h2>
                        <br />
                    </div>
                );
            }
        );
        return (
            <div>
                <Sidebar>
                    <div class="row">
                        <h3 style={{ marginLeft: "10%" }}> Active Users</h3>
                        <br />
                        <div>{users}</div>
                    </div>
                </Sidebar>
            </div >
        );
    }
}

export default ActiveUsers;
