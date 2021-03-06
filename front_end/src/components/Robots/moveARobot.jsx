import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { backend } from "../../webConfig";
import { UserSidebar } from "../Util/UserLayout";
import { history } from "../Util/history";

class MoveARobot extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      robot: [],
      x: 0,
      y: 0,
    };
  }
  fetchRobot() {
    axios
      .get(
        backend + "/api/robots/getRobot",
        {
          params: {
            robotId: this.props.location.state,
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
          this.setState({ robot: response.data });
          var roboPath = this.state.robot.roboPath;
          var roboPathLength = this.state.robot.roboPath.length;
          this.setState({ x: roboPath[roboPathLength - 1].x });
          this.setState({ y: roboPath[roboPathLength - 1].y });
        }
      });
  }
  moveRobot = (e, id) => {
    history.push("/moveARobot", id);
  };
  changeStatus = (e) => {
    const data = {
      roboState:
        this.state.robot.roboState === "Active" ? "InActive" : "Active",
      id: this.props.location.state,
      timeStamp: new Date(),
    };
    axios
      .post(backend + "/api/robots/changeRobotStatus", data)
      .then((response) => {
        if (response.data) {
          this.fetchRobot();
        }
      });
  };
  moveup = (e) => {
    const data = {
      x: this.state.x,
      y: this.state.y + 1,
      id: this.props.location.state,
    };
    axios
      .post(backend + "/api/robots/changeRobotPath", data)
      .then((response) => {
        if (response.data) {
          this.fetchRobot();
        }
      });
  };
  moveDown = (e) => {
    let data = {
      x: this.state.x,
      y: this.state.y - 1,
      id: this.props.location.state,
    };
    axios
      .post(backend + "/api/robots/changeRobotPath", data)
      .then((response) => {
        if (response.data) {
          this.fetchRobot();
        }
      });
  };
  moveLeft = (e) => {
    let data = {
      x: this.state.x - 1,
      y: this.state.y,
      id: this.props.location.state,
    };
    axios
      .post(backend + "/api/robots/changeRobotPath", data)
      .then((response) => {
        if (response.data) {
          this.fetchRobot();
        }
      });
  };
  moveRight = (e) => {
    let data = {
      x: this.state.x + 1,
      y: this.state.y,
      id: this.props.location.state,
    };
    axios
      .post(backend + "/api/robots/changeRobotPath", data)
      .then((response) => {
        if (response.data) {
          this.fetchRobot();
        }
      });
  };

  componentDidMount() {
    console.log("Updateddd");
    this.fetchRobot();
  }

  render() {
    return (
      <div>
        <UserSidebar>
          <div class="card2">
            <div class="row" style={{ fontSize: "20px" }}>
              <div class="col">Robot Details </div>
            </div>
            <br />
            <div class="row">
              <div class="col">Robot id: {this.state.robot.roboId} </div>
              <div class="col">Robot Name: {this.state.robot.roboName}</div>
            </div>
            <br />
            <div class="row">
              <div class="col">Robot State: {this.state.robot.roboState}</div>
              <div class="col">Run Time: {this.state.robot.runTime}</div>
            </div>
            <br />
            <div class="row">
              <div class="col">Robot Path x : {this.state.x}</div>
              <div class="col">Robot Path y : {this.state.y}</div>
            </div>
            <br />
          </div>
          <div class="card2" style={{ width: "80%" }}>
            <div class="row" style={{ fontSize: "20px" }}>
              <div class="col">Move Robot </div>
            </div>
            <div class="grid-container" style={{ marginLeft: "15%" }}>
              <div class="row">
                <div class="col-2-3">
                  <button class="btn2 btn2-hide">Move</button>
                </div>
                <div class="col-2-3">
                  <button
                    class="btn btn-success"
                    onClick={(e) => this.moveup(e)}
                    type="submit"
                  >
                    Up
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-1-3">
                  <button
                    class="btn btn-success"
                    onClick={(e) => this.moveLeft(e)}
                    type="submit"
                  >
                    Left
                  </button>
                </div>
                <div class="col-2-3">
                  <button
                    class="btn btn-success"
                    onClick={(e) => this.changeStatus(e)}
                    type="submit"
                  >
                    Play/Pause
                  </button>
                </div>
                <div class="col-3-3">
                  <button
                    class="btn btn-success"
                    onClick={(e) => this.moveRight(e)}
                    type="submit"
                  >
                    Right
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-1-3">
                  <button class="btn2 btn2-hide">Move</button>
                </div>
                <div class="col-2-3">
                  <button
                    class="btn btn-success"
                    onClick={(e) => this.moveDown(e)}
                    type="submit"
                  >
                    Down
                  </button>
                </div>
              </div>
            </div>
          </div>
        </UserSidebar>
      </div>
    );
  }
}

export default MoveARobot;
