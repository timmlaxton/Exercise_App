import React, { Component } from 'react';
import YouTube from 'react-youtube';

  // https://youtu.be/_nBlN9yp9R8
  // https://www.youtube.com/watch?v=_nBlN9yp9R8&t=334s
class Running extends Component {

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render () {
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

      return (

        <div className="running-text">
          <h2>Welcome to Excer Tracker</h2>
          <h5>A exercise app that allows you to create your own fitness regime</h5>


        <div className="running-video">
        <YouTube
          videoId="m-P8ge77FY4"
          opts={opts}
          onReady={this._onReady}
        />
       </div>
        </div>
      );
    }

    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();




    }
  }








export default Running;
