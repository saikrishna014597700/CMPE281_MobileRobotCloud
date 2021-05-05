import Controller from "./Controller";
import Navigation from "./Navigation";
import Odometry from "./Odometry";
import SaveMap from "./SaveMap";
import React, { Component } from 'react';

class GameBoard extends Component {
  render() {
    return (
        <div class="whiteboard">
            <div className="top">
                <Controller/>
                <Odometry/>
          </div>
          <div class="bottom">
            <Navigation/>
            <SaveMap/>
          </div>
        </div>
    );
  }
}

export default GameBoard;