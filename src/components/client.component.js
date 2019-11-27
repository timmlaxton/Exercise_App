import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';



 class Client extends Component {
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
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://3v718laqyo244ii5v20dg6ff-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/5-Fixes-for-Cycling-Related-Lower-Back-Pain-752x472.jpg) center / cover'}} ></CardTitle>
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

            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/05/29/open-water-swimmer_s.jpg?itok=9KoLuX6-) center / cover'}} ></CardTitle>
              <CardText>
                Exercise Log
              </CardText>
              <CardActions border>
                <Button href="/exercise" colored>Client Log</Button>

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

        <div className="profile-grid">


            <Grid>
              <Cell col={12} row={6}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
        </div>
      )
    }
  }


export default Client
