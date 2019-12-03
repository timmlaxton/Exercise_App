import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { DataTable, TableHeader } from 'react-mdl';
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

        <div className="running-log-b">

        <DataTable
    selectable
    shadow={0}
    rowKeyColumn="id"
    rows={[
        {id: 1001, exercise: 'Press-ups', reps: 25, sets: 2},
        {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
        {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
        {id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
        {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
        {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
    ]}
>
    <TableHeader name="exercise">Exercise</TableHeader>
    <TableHeader numeric name="reps" tooltip="Number of materials">Reps</TableHeader>
    <TableHeader numeric name="sets" tooltip="Price pet unit">Sets</TableHeader>
    </DataTable>

    <div className="running-log-m">

    <DataTable
selectable
shadow={0}
rowKeyColumn="id"
rows={[
    {id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
    {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
    {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
    {id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
    {id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
    {id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
]}
>
<TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
<TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
<TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
</DataTable>

https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bdip.gif?resize=480:*

<div className="running-log-a">

<DataTable
selectable
shadow={5} style={{minWidth: '450', margin: 'auto'}}
rowKeyColumn="id"
rows={[
{id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
{id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25},
{id: 1003, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
{id: 1004, material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35},
{id: 1001, material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
{id: 1002, material: 'Plywood (Birch)', quantity: 50, price: 1.25}
]}
>
<TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
<TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
<TableHeader numeric name="price" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Price</TableHeader>
</DataTable>




        <div className="running-video">
        <YouTube
          videoId="2dAorgAB0I4"
          opts={opts}
          onReady={this._onReady}
        />
       </div>
        </div>
        </div>
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
