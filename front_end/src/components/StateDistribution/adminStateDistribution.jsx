import React, { Component } from "react";
import "../../App.css";
import axios from "axios";
import { backend } from "../../webConfig";
import { Sidebar } from "../Util/Layout";
import roboImage from "../Util/roboImage.jpeg";

class AdminStateDistribution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // robots: []
        };
    }
    componentDidMount() {
        // axios
        //     .get(backend + "/api/robots/allActiveRobots", {
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     })
        //     .then(response => {
        //         console.log("Robots", response)
        //         if (response.data) {
        //             this.setState({ robots: response.data })
        //         }
        //     });
    }

    render() {
        return (
            <div>
                <Sidebar>
                    State Distribution
                </Sidebar>
            </div >
        );
    }
}

export default AdminStateDistribution;
