import React, { Component } from 'react';
class Navigation extends Component {
    constructor(props) {
      super(props);
      window.NavigationControlInstance = this;
      this.state = { x: 0, y:0, heading:0 };
    }  
    render() {
      return (
        <div class="goal">
          <div class="title_goal">Goal</div>
          <div class="goal_x">x</div>
          <div class="goal_y">y</div>
          <div class="goal_heading">heading</div>
          <div class="goal_value_x"><input class="input_field" type="text" onChange={this.onChangeGoalX} value={this.state.x} /></div>
          <div class="goal_value_y"><input class="input_field" type="text" onChange={this.onChangeGoalY} value={this.state.y} /></div>
          <div class="goal_value_heading"><input class="input_field" type="text" onChange={this.onChangeGoalHeading} value={this.state.heading} /></div>
          <div class="goal_button"><button class="button action_button" onClick={window.go_to_target}>[G]o To</button></div>
        </div>
      );
    }
  
    onChangeGoalX(e) {
        window.NavigationControlInstance.setState({x: e.target.value});
    }
    onChangeGoalY(e) {
        window.NavigationControlInstance.setState({y: e.target.value});
    }
    onChangeGoalHeading(e) {
        window.NavigationControlInstance.setState({heading: e.target.value});
    }
  }
  export default Navigation;