import React, { Component } from 'react';
import  { Grid, Row, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



 class Trainer extends Component {
   render () {
    return (
  



      <div className="grid-container">
      <div className="row-container">




      <div className="card-one">
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1568757836.jpg?crop=0.668xw:1.00xh;0.287xw,0&resize=480:*) center / cover'}} ></CardTitle>
        <CardText>
        Running
        </CardText>
        <CardActions border>
        <Button href="/running" colored>Newbie</Button>
        <Button href="/create" colored>Moderate</Button>
        <Button href="/create" colored>Advanced</Button>



        </CardActions>


        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>



        <div className="card-two">
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://3v718laqyo244ii5v20dg6ff-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/5-Fixes-for-Cycling-Related-Lower-Back-Pain-752x472.jpg) center / cover'}} ></CardTitle>
             <CardText>
             Cycling
             </CardText>
             <CardActions border>
               <Button href="/create" colored>Newbie</Button>
               <Button href="/create" colored>Moderate</Button>
               <Button href="/create" colored>Advanced</Button>

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
              Swimming
            </CardText>
            <CardActions border>
            <Button href="/running" colored>Newbie</Button>
            <Button href="/create" colored>Moderate</Button>
            <Button href="/create" colored>Advanced</Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          </div>

          <div className="card-four">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1573572425342-bcebfa8cc3db?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60)  center / cover'}} ></CardTitle>
           <CardText>
             Climbing
           </CardText>
           <CardActions border>
           <Button href="/running" colored>Newbie</Button>
           <Button href="/create" colored>Moderate</Button>
           <Button href="/create" colored>Advanced</Button>

           </CardActions>

           <CardMenu style={{color: '#fff'}}>
             <IconButton name="share" />
           </CardMenu>
         </Card>

         </div>

         <div className="card-five">
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.cdnparenting.com/articles/2019/03/04134945/562323112-H.jpg) center / cover'}} ></CardTitle>
          <CardText>
            Skipping
          </CardText>
          <CardActions border>
          <Button href="/running" colored>Newbie</Button>
          <Button href="/create" colored>Moderate</Button>
          <Button href="/create" colored>Advanced</Button>
          </CardActions>

          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

          </div>

          <div className="card-five">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.unsplash.com/photo-1493690283958-32df2c86326e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60) center / cover'}} ></CardTitle>
           <CardText>
             Weights
           </CardText>
           <CardActions border>
           <Button href="/running" colored>Newbie</Button>
           <Button href="/create" colored>Moderate</Button>
           <Button href="/create" colored>Advanced</Button>

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









export default Trainer
