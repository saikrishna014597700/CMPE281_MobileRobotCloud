import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { backend } from "../../webConfig";
import { UserSidebar } from "../Util/UserLayout";

class UserBilling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billing: [],
    };
  }
  componentDidMount() {
    console.log("UI", localStorage.getItem('user_Id'))
    axios
      .get(
        backend + "/api/robots/robotsByUser",
        {
          params: {
            userId: localStorage.getItem("userId"),
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.data) {
          this.setState({ billing: response?.data });
        }
      });
  }

  render() {
    let billing = this.state.billing;
    let total = 0;
    let robotTable = billing.map((robot) => {
      total = total + robot.runTime * (1 / 60);
      return (
        <tr>
          <td>{robot.roboId}</td>
          <td>{robot.roboName}</td>
          <td>{robot.runTime}</td>
          <td>{Math.round(((robot.runTime * (1 / 60)) * 100) / 100).toFixed(2)}</td>
        </tr>
      );
    });
    return (
      <div>
        <UserSidebar>
          <br />
          <br />
          <h2 style={{ marginLeft: "40%", fontSize: "20px" }}>
            User Billing Amount
          </h2>
          <br />
          <br />
          <div style={{ marginLeft: "30px", marginRight: "30px" }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Robot Id</th>
                  <th scope="col">Robot Name</th>
                  <th scope="col">Runtime (seconds)</th>
                  <th scope="col">Amount ($)</th>
                </tr>
              </thead>
              <tbody>
                {robotTable}
                <tr>
                  <th scope="col">Total Billing Amount</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col">${(Math.round(total * 100) / 100).toFixed(2)}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </UserSidebar>
      </div>
    );
  }
}

export default UserBilling;
