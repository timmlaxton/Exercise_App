import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

 export default class Home extends Component {
   render() {
     return(

       <div style={{width: '80%', margin: 'auto'}}>
        <Grid className="New-user"/>
         <Cell col={3} />
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1549190179-646f048c6108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60) center / cover'}} ></CardTitle>
              <CardText>
              Create New User
              </CardText>
              <CardActions border>
              <Button href="/user" colored>New User</Button>



              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>


            <div style={{width: '80%', margin: 'auto'}}>
             <Grid className="New-log"/>
              <Cell col={3} />
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1549190179-646f048c6108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60) center / cover'}} ></CardTitle>
            <CardText>
            Create New log
            </CardText>
            <CardActions border>
            <Button href="/user" colored>New log</Button>


            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <div style={{width: '80%', margin: 'auto'}}>
           <Grid className="Custom-regime"/>
           <Cell col={3} />
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1549190179-646f048c6108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60) center / cover'}} ></CardTitle>
          <CardText>
          Create New regime
          </CardText>
          <CardActions border>
          <Button href="/user" colored>New regime</Button>


          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>



              </div>
              </div>
              </div>




      )
    }
  }
