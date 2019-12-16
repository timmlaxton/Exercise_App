import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar";
import Home from "./components/home.component";
import Trainer from "./components/trainer.component";
import Client from "./components/client.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Running from "./components/running.component";
import Cycling from "./components/cycling.component";
import Swimming from "./components/swimming.component";
import Climbing from "./components/climbing.component";
import Skipping from "./components/skipping.component";
import Weights from "./components/weights.component";


function App() {
  return (
    <Router>
    <div className="container">
    <Navbar />
  <br/>
  <Route path="/" exact component={Home} />
  <Route path="/trainer" exact component={Trainer}/>
  <Route path="/client" exact component={Client}/>
  <Route path="/user" exact component={CreateUser} />
  <Route path="/create" exact component={CreateExercise} />
  <Route path="/exercise" exact component={ExercisesList} />
  <Route path="/running" exact component={Running} />
  <Route path="/cycling" exact component={Cycling} />
  <Route path="/swimming" exact component={Swimming} />
  <Route path="/climbing" exact component={Climbing} />
  <Route path="/skipping" exact component={Skipping} />
  <Route path="/weights" exact component={Weights} />

  </div>
  </Router>
  );
}

export default App;
