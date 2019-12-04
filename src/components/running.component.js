import React, { Component } from 'react';
import { DataTable, TableHeader } from 'react-mdl';
import {Jumbotron, Button, Container} from 'reactstrap';

class Running extends Component {
  render () {
   return (

     <div class="container">
  <div class="jumbotron jumbotron-cover-image">
    <div class="container">
        <h1>Hello, world!</h1>
        <p>...</p>

</div>
  <div className="running-text">
  <h2>Welcome to Excer Tracker</h2>
  <h5>A exercise app that allows you to create your own fitness regime</h5>


    <div className="running-log-b">

    <DataTable
    selectable
    shadow={5} style={{minWidth: '450', margin: 'auto'}}
    rowKeyColumn="id"
    rows={[
        {id: 1001, exercise: 'Press-ups', reps: 25, sets: 2},
        {id: 1002, exercise: 'Dumbell', reps: 12, sets: 2},
        {id: 1003, exercise: 'TricepDips', reps: 12, sets: 2},
        {id: 1001, exercise: 'Step-ups', reps: 10, sets: 2},
        {id: 1002, exercise: 'Squats', reps: 15, sets: 2},
        {id: 1003, exercise: 'Walking Lunges', reps: 8, sets: 2},
        {id: 1003, exercise: 'Single-leg deadlift', reps: 10, sets: 2},
        {id: 1003, exercise: 'Superman/ back extension', reps: 8},
        {id: 1003, exercise: 'Glute bridge', reps: 15, sets: 2},
        {id: 1003, exercise: 'Leg Raises', reps: 10}

    ]}
>
    <TableHeader name="exercise">Exercise</TableHeader>
    <TableHeader numeric name="reps" tooltip="Number of materials">Reps</TableHeader>
    <TableHeader numeric name="sets" tooltip="Price pet unit">Sets</TableHeader>
    </DataTable>

    <div className="running-log-m">


        </div>
        </div>
        </div>
          </div>
          </div>
      








      )
    }
  }








export default Running;
