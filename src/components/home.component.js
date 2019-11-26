import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl';


 class Home extends Component {
   constructor(props){
     super(props);
     this.state = {activeTab: 0};
   }


   render() {
     return(
       <div className="category-tabs">
       <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
       <Tab>Running</Tab>
       <Tab>Swimming</Tab>
       <Tab>Yoga</Tab>
       <Tab>Cycling</Tab>
       </Tabs>
       </div>

   )
  }
 }

export default Home
