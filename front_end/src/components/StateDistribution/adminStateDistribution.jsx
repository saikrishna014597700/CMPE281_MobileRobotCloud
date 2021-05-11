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
            robots: [],
            activeRobots:0,
            inActiveRobots:0,
            connectedRobots:0,
            stoppedRobots:0
        };
    }
    componentDidMount() {
        axios
            .get(backend + "/api/robots/allRegRobots", {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(async response => {
                console.log("Robots", response)
                if (response.data) {
                        response.data.map(async(robo)=>
                        {
                            if(robo.roboState == "Active"){
                                this.setState({activeRobots:this.state.activeRobots+1})
                            }
                            else if(robo.roboState == "InActive"){
                                this.setState({inActiveRobots:this.state.inActiveRobots+1})
                            }
                            else if(robo.roboState == "connected"){
                                this.setState({connectedRobots:this.state.connectedRobots+1})
                            }else{
                                this.setState({stoppedRobots:this.state.stoppedRobots+1})
                            }

                        })
                    
                    //this.setState({ robots: response.data })
                }
            });
    }

     render() {
        return (
            <div>
                <Sidebar>
                    
                    <h2 style={{ marginLeft: "10%", fontSize: "20px" }}>State Distribution</h2>
                    <div  style  = {{marginLeft: "10%",marginTop:"5%", fontSize: "20px",fontWeight:"bold"}}className="row">

                       No of Active robots : {this.state.activeRobots}
                       </div>
                       <div  style  = {{marginLeft: "10%", fontSize: "20px",fontWeight:"bold"}}className="row">
                       No of InActive robots : {this.state.inActiveRobots}
                       </div>
                       <div  style  = {{marginLeft: "10%", fontSize: "20px",fontWeight:"bold"}}className="row">
                       No of Connected robots : {this.state.connectedRobots}
                       </div>
                       <div  style  = {{marginLeft: "10%", fontSize: "20px",fontWeight:"bold"}}className="row">
                       No of stopped robots : {this.state.stoppedRobots}
                       </div>
                   
                </Sidebar>
            </div >
        );
    }
}

export default AdminStateDistribution;
