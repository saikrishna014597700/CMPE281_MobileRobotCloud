import React, { Component } from 'react';
class Odometry extends Component {
    constructor(props) {
      super(props);
      window.OdometryControlInstance = this;
      this.state = { x: 0, y:0, z:0, h:0 };
    }  
    render() {
      return (
        <div class="location">
          <div class="title">Location</div>
          <div class="name">Odometry</div>
          <div class="odom_x">x</div>
          <div class="odom_y">y</div>
          <div class="odom_z">z</div>
          <div class="odom_heading">heading</div>
          <div class="odom_value_x">{this.state.x}</div>
          <div class="odom_value_y">{this.state.y}</div>
          <div class="odom_value_z">{this.state.z}</div>
          <div class="odom_value_heading">{this.state.h}</div>
        </div>
      );
    }
  }

  export default Odometry;