import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



   class Home extends Component {
     constructor(props){
       super(props)
       this.state = {activeTab: 0};
     }
     toggleCategories() {

        if(this.state.activeTab === 0){
          return(

          <div className="card-grid">


              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/running-is-one-of-the-best-ways-to-stay-fit-royalty-free-image-1568757836.jpg?crop=0.668xw:1.00xh;0.287xw,0&resize=480:*) center / cover'}} ></CardTitle>
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



              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.success.edu/wp-content/uploads/2014/04/north-west-college-health-care-careers-professional-fitness-trainer.jpg) center / cover'}} ></CardTitle>
                <CardText>
                Trainer
                </CardText>
                <CardActions border>
                  <Button href="/create" colored>qwqw</Button>

                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>


</div>


)
}
}

  render() {
  return(


        <div className="home-title">
        <h1> Welcome to Excer Tracker </h1>


        <div className="profile-grid">


            <Grid>
              <Cell col={12} row={6}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
        </div>
        </div>
      )
    }
  }


export default Home
