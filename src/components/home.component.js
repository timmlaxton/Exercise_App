import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



   class Home extends Component {
    render() {
  return(

<div className="hero-image-1">

  <div className="hero-text-1">
    <h2>Welcome to Excer Tracker</h2>
    <h5>A exercise app that allows you to create your own fitness regime</h5>
  <div className="button-1">
    <Button href="/trainer" size="lg">Exercises</Button>
    <Button href="/client" size="lg">Custom Regime</Button>
    <Button variant="primary" size="lg" active>
    Primary button  </Button>
     <Button variant="dark">Dark</Button>


    </div>

    </div>

  </div>








      )
    }
  }


export default Home
