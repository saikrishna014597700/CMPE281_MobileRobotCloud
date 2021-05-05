import React, { Component } from 'react';
var move_forward_down = function () {console.log("move_forward pressed"); window.MoveAction = "forward"; window.SyncJobFunction()};
var move_forward_up = function () {console.log("move_forward released"); window.MoveAction = "";};
var move_left_down = function () {console.log("move_left pressed"); window.MoveAction = "left"; window.SyncJobFunction()};
var move_left_up = function () {console.log("move_left released"); window.MoveAction = "";};
var move_right_down = function () {console.log("move_right pressed"); window.MoveAction = "right"; window.SyncJobFunction()};
var move_right_up = function () {console.log("move_right released"); window.MoveAction = "";};
var move_backward_down = function () {console.log("move_backward pressed"); window.MoveAction = "backward"; window.SyncJobFunction()};
var move_backward_up = function () {console.log("move_backward released"); window.MoveAction = "";};
var move_stop_down = function () {console.log("move_stop pressed"); window.MoveAction = "stop"; window.SyncJobFunction()};
var move_stop_up = function () {console.log("move_stop released"); window.MoveAction = "";};
var map_save = function () { window.SaveMapFunction(); }
var go_to_target = function() { window.GoToTargetFunction(window.NavigationControlInstance.state.x, window.NavigationControlInstance.state.y, window.NavigationControlInstance.state.heading) }

class Controller extends Component {
    componentDidMount () {
        const script = document.createElement("script");
        script.src = "../RoboMaker/js/aws-iot-sdk-browser-bundle.js";
        script.async = true;
        document.body.appendChild(script);
        const script1 = document.createElement("script");
        script1.src = "../RoboMaker/js/app.js";
        script1.async = true;
        document.body.appendChild(script1);
        const script2 = document.createElement("script");
        script2.src = "../RoboMaker/js/app-settings.js";
        script2.async = true;
        document.body.appendChild(script2);
    }
    render() {
      return (
        <div class="controller">
          <div class="forward">
            <button class="button move_button" onMouseDown={move_forward_down} onMouseUp={move_forward_up} >↑</button>
          </div>
          <div class="left">
            <button class="button move_button"  onMouseDown={move_left_down} onMouseUp={move_left_up}>←</button> 
          </div>
          <div className="stop">
            <button class="button move_button"  onMouseDown={move_stop_down} onMouseUp={move_stop_up}>・</button>
          </div>
          <div className="right">
            <button class="button move_button"  onMouseDown={move_right_down} onMouseUp={move_right_up}>→</button>
          </div>
          <div className="backward">
            <button class="button move_button"  onMouseDown={move_backward_down} onMouseUp={move_backward_up}>↓</button>
          </div>
        </div>
      );
    }
  }
  export default Controller;