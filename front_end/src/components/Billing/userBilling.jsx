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
      billing: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        // backend + "/api/account/userBilling",
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
          console.log("robots Billing by user ", response.data);
          // this.setState({ billing: response.data.payload[0].summ });
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
        <div>
          {/* <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Robo Name</th>
                <th scope="col">Runtime in seconds</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{robot.roboId}</td>
                <td>{robot.roboName}</td>
                <td>{robot.runTime}</td>
                <td>{robot.runTime * (1 / 60)}</td>
              </tr>
            </tbody>
          </table> */}
          {/* <table> */}
          <table class="table">
            <tbody>
              <tr>
                <td>{robot.roboId}</td>
                <td>{robot.roboName}</td>
                <td>{robot.runTime}</td>
                <td>{robot.runTime * (1 / 60)}</td>
              </tr>
            </tbody>
          </table>
          {/* </table> */}
        </div>
      );
    });
    return (
      <div>
        <UserSidebar>
          <br />
          <h2 style={{ marginLeft: "10%", fontSize: "20px" }}>
            {" "}
            {/* User Billing Info : {billing} */}
          </h2>
          <br />
          {/* <p style={{ marginLeft: "10%" }}>This billing is based on the time that you have spend working on all the registered robots... More info will ne provided on this screen in our next update</p> */}
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Robo Name</th>
                <th scope="col">Runtime in seconds</th>
                <th scope="col">Amount($)</th>
              </tr>
            </thead>
            {/* <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Robo1</td>
                <td>1800</td>
                <td>0.5 USD</td>
              </tr>
              {robotTable}
            </tbody> */}
          </table>
          {robotTable}
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Total</th>
                <th scope="col">-</th>
                <th scope="col">-</th>
                <th scope="col">{total}</th>
              </tr>
            </thead>
          </table>
        </UserSidebar>
      </div>
    );
  }
}

export default UserBilling;
