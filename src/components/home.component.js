import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import background from "../images/background.jpg";


   class Home extends Component {
    render() {
  return(


        <div className="home-title">
        <h1> Welcome to Excer Tracker </h1>


        <div className="back-img">
        <img src={background}/>
        </div>
        </div>

      )
    }
  }


export default Home
