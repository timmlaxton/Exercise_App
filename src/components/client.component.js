import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Client extends Component {
  render () {
   return (

       <div className="grid-container">
       <div className="row-container">


       <div className="card-one">
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
         <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60) center / cover'}} ></CardTitle>
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



         <div className="card-two">
       <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center / cover'}} ></CardTitle>
              <CardText>
              Create New Routine
              </CardText>
              <CardActions border>
                <Button href="/create" colored>Choose A Routine</Button>

              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

              </div>

            <div className="card-three">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/05/29/open-water-swimmer_s.jpg?itok=9KoLuX6-) center / cover'}} ></CardTitle>
             <CardText>
               Track Your Progress
             </CardText>
             <CardActions border>
               <Button href="/exercise" colored>Client Log</Button>

             </CardActions>
             <CardMenu style={{color: '#fff'}}>
               <IconButton name="share" />
             </CardMenu>
           </Card>

           </div>


            </div>
            </div>
            </div>



       )
    }
  }





  export default Client
