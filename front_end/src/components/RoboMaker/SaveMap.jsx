import React, { Component } from 'react';
class SaveMap extends Component {
    render() {
      return (
        <div class="save">
          <div class="save_button">
            <button class="button action_button" onClick={window.map_save}>Save Map</button> 
          </div>
        </div>
      );
    }
  }
  export default SaveMap
