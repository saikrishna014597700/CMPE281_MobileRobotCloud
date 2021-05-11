import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { backend } from "../../webConfig";
import { UserSidebar } from "../Util/UserLayout";
import roboImage from "../Util/roboImage.jpeg";
import { history } from '../Util/history';

class ChooseRobots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: []
        };
    }
    createRobot = e => {
        history.push("/createRobot")
    }
    chooseRobot = (e, id) => {
        history.push("/moveARobot", id)
    }
    componentDidMount() {
        console.log("UI", localStorage.getItem('user_Id'))
        axios
            .get(backend + "/api/robots/allRegRobots", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.data) {
                    this.setState({ robots: response.data })
                }
            });
    }

    render() {
        let robots = this.state.robots.map(
            robot => {
                return (
                    <div class="col-sm-4 o">
                        <div class="card2">
                            <div class="wrapper">
                                <img
                                    src={roboImage}
                                    class="image--cover2"
                                ></img>
                            </div>
                            <h2>Robot id: {robot.roboId}  </h2>
                            <br />
                            <h2>Robot State: {robot.roboState} </h2>
                            <br />
                            <h2>Robot Name: {robot.roboName} </h2>
                            <br />
                            <h2>Run Time: {robot.runTime}</h2>
                            <button
                                class="btn btn-success"
                                onClick={e => this.chooseRobot(e, robot._id)}
                                type="submit"
                            >
                                Choose
              </button>

                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                );
            }
        );
        return (
            <div>
                <UserSidebar>
                    <div style={{ float: "right" }}><button
                        class="btn btn-success"
                        onClick={this.createRobot}
                        type="submit"
                    >
                        Create Robot
              </button>{' '}</div>
                    <br />
                    <h2 style={{ marginLeft: "10%", fontSize: "20px" }}> Existing Robots</h2>
                    <div className="row">
                        {robots}
                    </div>
                </UserSidebar>
            </div >
        );
    }
}

export default ChooseRobots;
